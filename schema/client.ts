/**
 * Stub typed client — replaced by `npm run sync-schema`.
 *
 * Run `npx decoupled-cli schema sync` after connecting to a Drupal space
 * to generate the real typed client with interfaces and queries.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types — sync-schema will replace with actual content types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

// Stub factory — uses raw queryByPath with a full route query
export function createTypedClient(client: DecoupledClient): TypedClient {
  const ROUTE_QUERY = `
    query ($path: String!) {
      route(path: $path) {
        ... on RouteInternal {
          entity {
            ... on NodePage {
              __typename id title path body { processed }
            }
            ... on NodeVendor {
              __typename id title path
              body { processed }
              vendorType { ... on TermVendorType { name } }
              products locationNumber websiteUrl
              image { url alt width height }
              featured
              created { timestamp }
              changed { timestamp }
            }
            ... on NodeEvent {
              __typename id title path
              body { processed }
              eventDate { timestamp }
              endDate { timestamp }
              location
              eventType { ... on TermEventType { name } }
              image { url alt width height }
              created { timestamp }
              changed { timestamp }
            }
            ... on NodeSeason {
              __typename id title path
              body { processed }
              startDate { timestamp }
              endDate { timestamp }
              hours
              image { url alt width height }
              created { timestamp }
              changed { timestamp }
            }
            ... on NodeNews {
              __typename id title path
              body { processed }
              image { url alt width height }
              category { ... on TermNewsCategory { name } }
              featured
              created { timestamp }
              changed { timestamp }
            }
            ... on NodeHomepage {
              __typename id title
              heroTitle heroSubtitle
              heroDescription { processed }
              statsItems {
                ... on ParagraphStatItem { id number label }
              }
              featuredVendorsTitle
              ctaTitle ctaDescription { processed }
              ctaPrimary ctaSecondary
            }
          }
        }
      }
    }
  `

  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
