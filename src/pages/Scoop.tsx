import CommandBlock from '../components/CommandBlock'

type ScoopApp = {
  name: string
  description: string
  scoopName: string
}

// Add new apps here: one object is enough to render the card and its command
const apps: ScoopApp[] = [
  {
    name: 'WaveR',
    description: 'Local music player.',
    scoopName: 'waver',
  },
]

const BUCKET_NAME = 'franorde'
const BUCKET_REPO = 'https://github.com/FRANORDE/scoop-bucket'

export default function Scoop() {
  return (
    <div className="scoop-page">
      <h2>Scoop</h2>
      <p className="scoop-intro">
        This is my personal Scoop bucket with my Windows apps. Add the bucket
        once, then install any app by name.
      </p>
      <p className="scoop-intro">
        Bucket repository:{' '}
        <a href={BUCKET_REPO} target="_blank" rel="noreferrer">
          {BUCKET_REPO}
        </a>
      </p>

      <article>
        <h3>Installation</h3>
        <CommandBlock command={`scoop bucket add ${BUCKET_NAME} ${BUCKET_REPO}`} />
        <CommandBlock command={`scoop install ${BUCKET_NAME}/<app>`} />
      </article>

      <article>
        <h3>Uninstallation</h3>
        <CommandBlock command="scoop uninstall <app>" />
        <CommandBlock command={`scoop bucket rm ${BUCKET_NAME}`} />
      </article>

      <section className="scoop-apps">
        <h2>Apps</h2>
        {apps.map((app) => (
          <article key={app.scoopName}>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <CommandBlock
              command={`scoop install ${BUCKET_NAME}/${app.scoopName}`}
            />
          </article>
        ))}
      </section>
    </div>
  )
}
