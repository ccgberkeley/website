import { useEffect, useRef, useState } from 'react'

interface ImageSlotProps {
  id: string
  src?: string
  alt?: string
  placeholder: string
  style?: React.CSSProperties
}

// Drop-zone image slot: drag a photo in or click to pick one. The chosen
// image is stored in localStorage (keyed by slot id) so it survives reloads.
// A `src` prop (a real shipped asset) takes precedence over the stored image.
export default function ImageSlot({ id, src, alt = '', placeholder, style }: ImageSlotProps) {
  const [stored, setStored] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setStored(localStorage.getItem(`img-slot:${id}`))
  }, [id])

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      try {
        localStorage.setItem(`img-slot:${id}`, dataUrl)
      } catch {
        // image too large for localStorage — still show it for this session
      }
      setStored(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const image = src ?? stored

  return (
    <div
      className="img-slot"
      style={{ ...style, position: style?.position ?? 'relative', cursor: src ? undefined : 'pointer', pointerEvents: 'auto' }}
      onClick={src ? undefined : () => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        load(e.dataTransfer.files[0])
      }}
    >
      {image ? (
        <>
          <img src={image} alt={alt} />
          {!src && (
            <button
              aria-label="Remove photo"
              onClick={(e) => {
                e.stopPropagation()
                localStorage.removeItem(`img-slot:${id}`)
                setStored(null)
              }}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                background: 'rgba(25,19,34,0.65)',
                color: '#FFFFFF',
                fontSize: 14,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          )}
        </>
      ) : (
        <span
          style={{
            padding: '12px 20px',
            border: `2px dashed ${dragOver ? '#FFFFFF' : 'rgba(255,255,255,0.45)'}`,
            borderRadius: 10,
            transition: 'border-color 0.2s',
          }}
        >
          {dragOver ? 'Drop it!' : `${placeholder} — drag & drop or click`}
        </span>
      )}
      {!src && (
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => load(e.target.files?.[0])}
        />
      )}
    </div>
  )
}
