import { useEffect, useState } from 'react'
import SpecularButton from '../components/SpecularButton'

type ProjectCardProps = {
  name: string
  description: string
  repo: string // format: "owner/repo"
  assetPattern: RegExp
}

// Add new projects here
const projects: ProjectCardProps[] = [
  {
    name: 'WaveR',
    description: 'Local music player.',
    repo: 'FRANORDE/WaveR',
    assetPattern: /^WaveR-Setup-.*\.exe$/,
  },
]

function ProjectCard({ name, description, repo, assetPattern }: ProjectCardProps) {
  // Fallback: the releases page, replaced by the direct download once found
  const [href, setHref] = useState(`https://github.com/${repo}/releases/latest`)

  useEffect(() => {
    async function loadLatest() {
      try {
        const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`)
        if (!res.ok) return // keep the fallback link
        const release = await res.json()
        const asset = release.assets.find((a: { name: string }) => assetPattern.test(a.name))
        if (asset) setHref(asset.browser_download_url)
      } catch {
        // network error: keep the fallback link
      }
    }
    loadLatest()
  }, [repo, assetPattern])

  const handleDownload = () => {
    // GitHub serves release assets as attachments, so the page stays put
    window.location.href = href
  }

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project-actions">
        <SpecularButton
          size="md"
          radius={8}
          tint="#7c9cff"
          tintOpacity={1}
          textColor="#0f1115"
          lineColor="#ffffff"
          baseColor="#5f7fe0"
          intensity={1}
          idleIntensity={0.35}
          shineSize={12}
          shineFade={40}
          thickness={1.2}
          glow={1}
          aria-label={`Download ${name}`}
          onClick={handleDownload}
          style={{ fontWeight: 600 }}
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 1a1 1 0 0 1 1 1v6.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4A1 1 0 1 1 4.7 6.3L7 8.59V2a1 1 0 0 1 1-1Z" />
            <path d="M2 12a1 1 0 0 1 1 1v1h10v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
          </svg>
          Download
        </SpecularButton>
        <SpecularButton
          size="md"
          radius={8}
          tint="#7c9cff"
          tintOpacity={0.12}
          textColor="#e6e8ee"
          lineColor="#7c9cff"
          baseColor="#3a4050"
          intensity={1}
          idleIntensity={0.35}
          shineSize={12}
          shineFade={40}
          thickness={1.2}
          glow={1}
          aria-label={`Open ${name} on GitHub`}
          onClick={() =>
            window.open(`https://github.com/${repo}`, '_blank', 'noopener,noreferrer')
          }
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          GitHub
        </SpecularButton>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      {projects.map((p) => (
        <ProjectCard key={p.repo} {...p} />
      ))}
    </>
  )
}
