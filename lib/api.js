// Library functions for data fetching and API calls

/**
 * Generic fetch wrapper with error handling
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} Response data
 */
export const fetchApi = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API fetch error:', error)
    throw error
  }
}

/**
 * Get blog posts (placeholder for future implementation)
 * @returns {Promise<Array>} Blog posts
 */
export const getBlogPosts = async () => {
  // This would typically fetch from a CMS or API
  return [
    {
      id: 1,
      title: 'Seaborn Stories of Imagination and Visualization',
      slug: 'seaborn-stories-visualization',
      excerpt: 'Exploring creative data visualization techniques using Seaborn library with storytelling approaches.',
      content: 'Full blog post content...',
      publishedAt: '2024-01-15',
      tags: ['Python', 'Data Visualization', 'Seaborn']
    },
    {
      id: 2,
      title: 'Limitless Farming',
      slug: 'limitless-farming',
      excerpt: 'Research on modern agricultural technology and data-driven farming solutions for sustainable agriculture.',
      content: 'Full blog post content...',
      publishedAt: '2024-02-10',
      tags: ['Research', 'Agriculture', 'Technology']
    }
  ]
}

/**
 * Get single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<object>} Blog post
 */
export const getBlogPost = async (slug) => {
  const posts = await getBlogPosts()
  return posts.find(post => post.slug === slug)
}
