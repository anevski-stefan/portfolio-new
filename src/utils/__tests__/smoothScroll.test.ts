import { smoothScroll } from '../smoothScroll'

describe('smoothScroll', () => {
  it('calls scrollIntoView with correct parameters', () => {
    const mockElement = {
      scrollIntoView: jest.fn()
    }
    
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as unknown as Element)
    
    smoothScroll('#test')
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  })

  it('does nothing if element is not found', () => {
    jest.spyOn(document, 'querySelector').mockReturnValue(null)
    
    smoothScroll('#nonexistent')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
}) 