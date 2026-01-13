import { describe, expect, it } from 'vitest'
import { generateIdea } from './ideas'

describe('generateIdea', () => {
  it('returns a string', () => {
    const idea = generateIdea()
    expect(typeof idea).toBe('string')
  })

  it("contains 'platform for'", () => {
    const idea = generateIdea()
    expect(idea).toContain('platform for')
  })

  it('generates different ideas', () => {
    const ideas = new Set<string>()
    for (let i = 0; i < 100; i++) {
      ideas.add(generateIdea())
    }
    expect(ideas.size).toBeGreaterThan(1)
  })
})
