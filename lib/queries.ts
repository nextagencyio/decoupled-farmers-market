import { gql } from '@apollo/client'

export const GET_VENDOR_TEASERS = gql`
  query GetVendorTeasers($first: Int = 10) {
    nodeVendors(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeVendor {
          body { processed summary }
          vendorType { name }
          products
          locationNumber
          websiteUrl
          image { url alt width height }
          featured
        }
      }
    }
  }
`

export const GET_EVENT_TEASERS = gql`
  query GetEventTeasers($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeEvent {
          body { processed summary }
          eventDate { timestamp }
          endDate { timestamp }
          location
          eventType { name }
          image { url alt width height }
        }
      }
    }
  }
`

export const GET_SEASON_TEASERS = gql`
  query GetSeasonTeasers($first: Int = 10) {
    nodeSeasons(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeSeason {
          body { processed summary }
          startDate { timestamp }
          endDate { timestamp }
          hours
          image { url alt width height }
        }
      }
    }
  }
`

export const GET_NEWS_TEASERS = gql`
  query GetNewsTeasers($first: Int = 10) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeNews {
          body { processed summary }
          image { url alt width height }
          category { name }
          featured
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredVendorsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body { processed }
          }
          ... on NodeVendor {
            id
            title
            path
            body { processed }
            vendorType { name }
            products
            locationNumber
            websiteUrl
            image { url alt width height }
            featured
            created { timestamp }
            changed { timestamp }
          }
          ... on NodeEvent {
            id
            title
            path
            body { processed }
            eventDate { timestamp }
            endDate { timestamp }
            location
            eventType { name }
            image { url alt width height }
            created { timestamp }
            changed { timestamp }
          }
          ... on NodeSeason {
            id
            title
            path
            body { processed }
            startDate { timestamp }
            endDate { timestamp }
            hours
            image { url alt width height }
            created { timestamp }
            changed { timestamp }
          }
          ... on NodeNews {
            id
            title
            path
            body { processed }
            image { url alt width height }
            category { name }
            featured
            created { timestamp }
            changed { timestamp }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredVendorsTitle
            ctaTitle
            ctaDescription { processed }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
