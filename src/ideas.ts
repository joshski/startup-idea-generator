const adjectives = [
  'AI-powered',
  'blockchain-based',
  'sustainable',
  'social',
  'on-demand',
  'peer-to-peer',
  'subscription-based',
  'gamified',
  'voice-activated',
  'AR-enhanced',
]

const domains = [
  'pet care',
  'meal delivery',
  'fitness',
  'education',
  'mental health',
  'dating',
  'home services',
  'travel',
  'fashion',
  'productivity',
]

const audiences = [
  'busy professionals',
  'college students',
  'remote workers',
  'new parents',
  'senior citizens',
  'pet owners',
  'small businesses',
  'freelancers',
  'fitness enthusiasts',
  'eco-conscious consumers',
]

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateIdea(): string {
  const adjective = pickRandom(adjectives)
  const domain = pickRandom(domains)
  const audience = pickRandom(audiences)

  return `${adjective} ${domain} platform for ${audience}`
}
