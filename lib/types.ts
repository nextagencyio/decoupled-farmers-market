
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalVendor extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  vendorType?: Array<{ name: string }>
  products?: string
  locationNumber?: string
  websiteUrl?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
  featured?: boolean
}

export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: { timestamp: number }
  endDate?: { timestamp: number }
  location?: string
  eventType?: Array<{ name: string }>
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalSeason extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  startDate?: { timestamp: number }
  endDate?: { timestamp: number }
  hours?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
  category?: Array<{ name: string }>
  featured?: boolean
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredVendorsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface VendorListData {
  nodeVendors: {
    nodes: DrupalVendor[]
  }
}

export interface EventListData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

export interface SeasonListData {
  nodeSeasons: {
    nodes: DrupalSeason[]
  }
}

export interface NewsListData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
