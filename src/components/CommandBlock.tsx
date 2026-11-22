
import { useEffect, useRef, useState } from 'react'
import SpecularButton from './reactbits/SpecularButton'

type CommandBlockProps = {
  command: string
}

const COPIED_TIMEOUT = 1500

export default function CommandBlock({ command }: CommandBlockProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), COPIED_TIMEOUT)
    } catch {
      // Clipboard access can fail outside secure contexts
    }
  }

  return (
    <div className="command-block">
      <code>{command}</code>
      <SpecularButton
        type="button"
        size="sm"
        radius={6}
        tint="#7c9cff"
        tintOpacity={0.1}
        textColor={copied ? '#7c9cff' : '#9aa1b2'}
        lineColor="#7c9cff"
        baseColor="#272b35"
        intensity={1}
        idleIntensity={0.25}
        shineSize={8}
        shineFade={28}
        thickness={1}
        glow={0.8}
        proximity={140}
        className="copy-button"
        onClick={handleCopy}
        aria-live="polite"
      >
        {copied ? 'Copied!' : 'Copy'}
      </SpecularButton>
    </div>
  )
}
