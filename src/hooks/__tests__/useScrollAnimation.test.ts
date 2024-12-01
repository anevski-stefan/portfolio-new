import { renderHook } from '@testing-library/react'
import { useScrollAnimation } from '../useScrollAnimation'

describe('useScrollAnimation', () => {
  it('returns animation controls and inView status', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    expect(result.current.ref).toBeDefined()
    expect(result.current.controls).toBeDefined()
    expect(typeof result.current.inView).toBe('boolean')
  })
}) 