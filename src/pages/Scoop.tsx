import CommandBlock from '../components/CommandBlock'

const BUCKET_NAME = 'franorde'
const BUCKET_REPO = 'https://github.com/FRANORDE/scoop-bucket'

export default function Scoop() {
  return (
    <div className="scoop-page">
      <title>FRANORDE - Scoop</title>
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
        <CommandBlock command={`scoop install <app>`} />
      </article>

      <article>
        <h3>Uninstallation</h3>
        <CommandBlock command="scoop uninstall <app>" />
        <CommandBlock command={`scoop bucket rm ${BUCKET_NAME}`} />
      </article>
    </div>
  )
}
