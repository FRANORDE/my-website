// Fill these in before publishing
const CONTROLLER = 'Fabio Cervi'
const EMAIL = 'fabiocervi24@gmail.com'
const LAST_UPDATED = '2026-11-22'

export default function Privacy() {
  return (
    <div className="privacy-page">
      <title>FRANORDE - Privacy</title>
      <h2>Privacy</h2>

      <article>
        <h3>Who is responsible</h3>
        <p>
          The controller of this website is {CONTROLLER}. You can contact me
          at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </article>

      <article>
        <h3>Cookies and tracking</h3>
        <p>
          This website does not use cookies or other tracking tools, does not
          use analytics, and does not store anything in your browser. It has
          no forms, accounts or comments, so I do not collect personal data
          directly.
        </p>
      </article>

      <article>
        <h3>Technical data and third parties</h3>
        <p>
          The site is hosted on Cloudflare. When you visit, Cloudflare
          processes technical data such as your IP address and the pages you
          request, to deliver the site and keep it secure (legitimate
          interest, art. 6(1)(f) GDPR).
        </p>
        <p>
          The Projects page asks the GitHub API, from your browser, for the
          latest release of each project, so GitHub also receives your IP
          address. Links and downloads lead to GitHub as well.
        </p>
        <p>
          These providers may process data outside the European Union. See
          their policies:{' '}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">
            Cloudflare
          </a>
          ,{' '}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </article>

      <article>
        <h3>Retention</h3>
        <p>
          I do not store any of this data myself. Logs kept by Cloudflare and
          GitHub follow their own policies.
        </p>
      </article>

      <article>
        <h3>Your rights</h3>
        <p>
          You can ask for access, rectification, erasure, restriction or
          objection regarding your personal data by writing to {EMAIL}. You
          can also lodge a complaint with the Italian Data Protection
          Authority (
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">
            Garante per la protezione dei dati personali
          </a>
          ).
        </p>
      </article>

      <p className="privacy-updated">Last updated: {LAST_UPDATED}</p>
    </div>
  )
}
