export const HOMEPAGE_QUERY = `
{
  allProjects {
    id
    title
    slug
    _status
    _firstPublishedAt
    cardBg {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        webpSrcSet
        title
        width
      }
    }
    cardDescription
    cardTextColor {
      hex
    }
    codebaseLink
    content {
      ... on GoalRecord {
        paragraph {
          value
          links
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
                responsiveImage {
                  alt
                  aspectRatio
                  base64
                  bgColor
                  height
                  sizes
                  src
                  srcSet
                  title
                  webpSrcSet
                  width
                }
              }
            }
          }
        }
        subheading
        id
      }
      ... on IntroRecord {
        id
        title
        introParagraph {
          value
          links
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
                responsiveImage {
                  alt
                  aspectRatio
                  base64
                  bgColor
                  height
                  sizes
                  src
                  srcSet
                  title
                  webpSrcSet
                  width
                }
              }
            }
          }
        }
      }
      ... on OutcomeRecord {
        id
        paragraph {
          blocks {
            id
          }
          value
          links
        }
        subheading
      }
      ... on ProjectFeatureSetRecord {
        id
        paragraph {
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
                responsiveImage {
                  alt
                  aspectRatio
                  base64
                  bgColor
                  height
                  sizes
                  src
                  srcSet
                  title
                  webpSrcSet
                  width
                }
              }
            }
          }
          links
          value
        }
        subheading
      }
    }
    techStack {
      iconSrc {
        url
      }
      name
      id
      createdAt
    }
    video {
      video {
        mp4Url
      }
    }
    liveSiteLink
    datePublished
    hasHeroImage
    heroImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        height
        bgColor
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    cardOrderNumber
  }
  project {
    id
  }
}
`;
