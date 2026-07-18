import { useRef, useState } from 'react'

interface VideoSlotProps {
  id: string
  src?: string
  placeholder: string
  style?: React.CSSProperties
}

// Drop-zone video slot: drag an mp4 in or click to pick one. Videos are too
// large for localStorage, so the preview lasts for the session only; a real
// shipped file goes in public/assets and is passed via `src`.
export default function VideoSlot({ src, placeholder, style }: VideoSlotProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith('video/')) return
    setBlobUrl(URL.createObjectURL(file))
  }

  const video = src ?? blobUrl

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: src ? undefined : 'pointer',
        pointerEvents: 'auto',
        ...style,
      }}
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
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span
          style={{
            padding: '12px 20px',
            border: `2px dashed ${dragOver ? '#FFFFFF' : 'rgba(255,255,255,0.35)'}`,
            borderRadius: 10,
            color: 'rgba(255,255,255,0.55)',
            fontFamily: "'Sora', sans-serif",
            fontSize: 14,
            fontWeight: 500,
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
          accept="video/*"
          style={{ display: 'none' }}
          onChange={(e) => load(e.target.files?.[0])}
        />
      )}
    </div>
  )
}
