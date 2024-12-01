export const smoothScroll = (target: string) => {
  const element = document.querySelector(target)
  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
} 