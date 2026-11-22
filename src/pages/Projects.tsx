import { useEffect, useState } from 'react'

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

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={href}>Download</a>
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
