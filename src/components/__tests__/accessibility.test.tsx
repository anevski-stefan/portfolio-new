import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import ProjectCard from '../projects/ProjectCard'

expect.extend(toHaveNoViolations)

describe('Accessibility', () => {
  it('ProjectCard has no accessibility violations', async () => {
    const mockProject = {
      title: 'Test Project',
      description: 'Test Description',
      image: '/test-image.jpg',
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
      tags: ['React', 'TypeScript'],
      highlights: ['Test highlight']
    }

    const { container } = render(
      <ProjectCard 
        title={mockProject.title}
        description={mockProject.description}
        image={mockProject.image}
        demoLink={mockProject.demoLink}
        githubLink={mockProject.githubLink}
        tags={mockProject.tags}
      />
    )
    
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
}) 