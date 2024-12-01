import { smoothScroll } from '../smoothScroll'

describe('smoothScroll', () => {
  it('calls scrollIntoView with correct parameters', () => {
    // Mock element and scrollIntoView
    const mockElement = {
      scrollIntoView: jest.fn()
    }
    
    // Mock querySelector
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as unknown as Element)
    
    smoothScroll('#test')
    
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  })

  it('does nothing if element is not found', () => {
    // Mock querySelector to return null
    jest.spyOn(document, 'querySelector').mockReturnValue(null)
    
    // This should not throw
    smoothScroll('#nonexistent')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
}) 