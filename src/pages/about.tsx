import Bio from '@/components/about/Bio'
import SEO from '@/components/layout/SEO'

export default function About() {
  return (
    <>
      <SEO title="About - Stefan Anevski" />
      <section className="py-12">
        <Bio />
      </section>
    </>
  )
} 