// src/sanity/lib/queries.ts
// GROQ Query definitions for Sanity Content Hub

/**
 * Fetch Learn Hub Settings Singleton (controls /learn/)
 */
export const LEARN_HUB_SETTINGS_QUERY = `
  *[_type == "learnHubSettings" && !(_id in path('drafts.**'))][0]{
    _id,
    seoTitle,
    seoDescription,
    heroEyebrow,
    heroH1,
    heroIntro,
    featuredPillars[]->{
      _id,
      title,
      "slug": slug.current,
      icon,
      shortDescription
    },
    featuredClusters[]->{
      _id,
      title,
      "slug": slug.current,
      order,
      icon,
      shortDescription
    },
    featuredArticles[]->{
      _id,
      _type,
      title,
      "slug": slug.current,
      contentType,
      excerpt,
      answerSummary,
      publishedAt,
      featuredImage,
      "primaryCluster": primaryCluster->{
        title,
        "slug": slug.current
      },
      "author": author->{
        name,
        photo
      }
    }
  }
`;

/**
 * Fetch all Major Topics (Pillars: AI SEO, AI Visibility)
 */
export const ALL_MAJOR_TOPICS_QUERY = `
  *[_type == "pillar" && !(_id in path('drafts.**'))] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    icon,
    shortDescription,
    primaryKeyword,
    order,
    seo,
    heroImage
  }
`;

/**
 * Fetch a single Major Topic by slug
 */
export const MAJOR_TOPIC_BY_SLUG_QUERY = `
  *[_type == "pillar" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
    _id,
    title,
    "slug": slug.current,
    icon,
    shortDescription,
    introduction,
    primaryKeyword,
    order,
    seo,
    heroImage
  }
`;

/**
 * Fetch all 6 locked clusters, sorted by order (1..6)
 */
export const ALL_CLUSTERS_QUERY = `
  *[_type == "cluster" && !(_id in path('drafts.**'))] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    order,
    icon,
    shortDescription,
    primaryKeyword,
    "articleCount": count(*[_type in ["article", "researchStudy"] && primaryCluster._ref == ^._id && !(_id in path('drafts.**'))]),
    heroImage
  }
`;

/**
 * Fetch a single cluster by slug
 */
export const CLUSTER_BY_SLUG_QUERY = `
  *[_type == "cluster" && slug.current == $clusterSlug && !(_id in path('drafts.**'))][0]{
    _id,
    title,
    "slug": slug.current,
    order,
    icon,
    shortDescription,
    introduction,
    primaryKeyword,
    seo,
    heroImage,
    featuredArticles[]->{
      _id,
      title,
      "slug": slug.current,
      contentType,
      excerpt,
      answerSummary,
      publishedAt
    }
  }
`;

/**
 * Fetch all published articles within a specific cluster
 */
export const ARTICLES_IN_CLUSTER_QUERY = `
  *[_type in ["article", "researchStudy"] && primaryCluster->slug.current == $clusterSlug && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    contentType,
    searchIntent,
    excerpt,
    answerSummary,
    body,
    publishedAt,
    lastSubstantiveUpdatedAt,
    featured,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "majorTopics": majorTopics[]->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      jobTitle,
      photo
    }
  }
`;

/**
 * Fetch all published articles associated with a specific Major Topic (AI SEO or AI Visibility)
 */
export const ARTICLES_IN_MAJOR_TOPIC_QUERY = `
  *[_type in ["article", "researchStudy"] && references($topicId) && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    contentType,
    searchIntent,
    excerpt,
    answerSummary,
    publishedAt,
    lastSubstantiveUpdatedAt,
    featured,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      jobTitle,
      photo
    }
  }
`;

/**
 * Fetch all published articles for main hub feed
 */
export const ALL_PUBLISHED_ARTICLES_QUERY = `
  *[_type == "article" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    contentType,
    seoStrategyType,
    audience,
    platforms,
    excerpt,
    answerSummary,
    body,
    publishedAt,
    lastSubstantiveUpdatedAt,
    featured,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "majorTopics": majorTopics[]->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      jobTitle,
      photo
    }
  }
`;

/**
 * Fetch published research studies
 */
export const PUBLISHED_RESEARCH_STUDIES_QUERY = `
  *[_type == "researchStudy" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    answerSummary,
    methodology,
    sampleSize,
    dateRange,
    sources,
    downloadablePdf,
    publishedAt,
    lastSubstantiveUpdatedAt,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      jobTitle,
      photo
    }
  }
`;

/**
 * Fetch a single article by slug
 */
export const ARTICLE_BY_SLUG_QUERY = `
  *[_type == "article" && slug.current == $articleSlug && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    contentType,
    seoStrategyType,
    audience,
    platforms,
    searchIntent,
    excerpt,
    answerSummary,
    primaryKeyword,
    body,
    faqSection,
    enableFaqSchema,
    sources,
    publishedAt,
    lastSubstantiveUpdatedAt,
    _updatedAt,
    featured,
    seo,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "majorTopics": majorTopics[]->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      "slug": slug.current,
      jobTitle,
      organisation,
      credentials,
      shortBio,
      photo,
      sameAs
    },
    "reviewer": reviewer->{
      name,
      "slug": slug.current,
      jobTitle,
      organisation,
      credentials,
      photo
    },
    reviewedAt,
    "relatedArticles": relatedArticles[]->{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      contentType,
      "clusterSlug": primaryCluster->slug.current
    }
  }
`;

/**
 * Fetch a single research study by slug
 */
export const RESEARCH_STUDY_BY_SLUG_QUERY = `
  *[_type == "researchStudy" && slug.current == $articleSlug && !(_id in path('drafts.**'))][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    answerSummary,
    methodology,
    sampleSize,
    dateRange,
    sources,
    downloadablePdf,
    body,
    publishedAt,
    lastSubstantiveUpdatedAt,
    featuredImage,
    "primaryCluster": primaryCluster->{
      title,
      "slug": slug.current
    },
    "author": author->{
      name,
      jobTitle,
      photo
    }
  }
`;

/**
 * Fetch active redirects
 */
export const ACTIVE_REDIRECTS_QUERY = `
  *[_type == "redirect" && enabled == true && !(_id in path('drafts.**'))]{
    fromPath,
    toPath,
    statusCode
  }
`;
