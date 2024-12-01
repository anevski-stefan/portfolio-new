import { render, screen } from '@testing-library/react'
import ProjectCard from '../projects/ProjectCard'

const mockProject = {
  title: 'Test Project',
  description: 'Test Description',
  image: '/test-image.jpg',
  demoLink: 'https://demo.com',
  githubLink: 'https://github.com',
  tags: ['React', 'TypeScript']
}

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(
      <ProjectCard 
        title={mockProject.title}
        description={mockProject.description}
        image={mockProject.image}
        demoLink={mockProject.demoLink}
        githubLink={mockProject.githubLink}
        tags={mockProject.tags}
      />
    )
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument()
    expect(screen.getByText(mockProject.description)).toBeInTheDocument()
    expect(screen.getByText(mockProject.tags[0])).toBeInTheDocument()
  })

  it('has correct links', () => {
    render(
      <ProjectCard 
        title={mockProject.title}
        description={mockProject.description}
        image={mockProject.image}
        demoLink={mockProject.demoLink}
        githubLink={mockProject.githubLink}
        tags={mockProject.tags}
      />
    )
    
    const demoLink = screen.getByText('Demo').closest('a')
    const githubLink = screen.getByText('Code').closest('a')
    
    expect(demoLink).toHaveAttribute('href', mockProject.demoLink)
    expect(githubLink).toHaveAttribute('href', mockProject.githubLink)
  })
}) 