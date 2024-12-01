import dynamic from 'next/dynamic'
import LazyLoad from '@/components/common/LazyLoad'

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project.',
    image: '/projects/project1.jpg',
    demoLink: 'https://demo1.com',
    githubLink: 'https://github.com/yourusername/project1',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  // Add more projects here
]

// Lazy load components
const ProjectCard = dynamic(() => import('@/components/projects/ProjectCard'), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-foreground/5 rounded-lg animate-pulse" />
})

export default function Projects() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <LazyLoad key={project.title}>
            <ProjectCard {...project} />
          </LazyLoad>
        ))}
      </div>
    </section>
  )
} 