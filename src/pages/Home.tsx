import TechText from '../components/TechText'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-wordmark">
        <TechText
          text="FRANORDE"
          fontWeight={600}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="assemble"
          introDuration={1.8}
          clickKick
          guides={false}
          accentColor="#7c9cff"
        />
      </div>
      <p className="hero-tagline">Personal website and projects.</p>
    </section>
  )
}
