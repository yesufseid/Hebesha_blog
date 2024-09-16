import { gql, request } from 'graphql-request'
const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "hellow"

export const Getpost=async()=>{
   const query=gql`
   query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          id
          photo {
            url
          }
          name
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
        }
      }
    }
  }
}`

const results:any=await request(graphqlAPI,query)
return results.postsConnection.edges
}
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result:any = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};
export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
  posts(last: 3, orderBy:createdAt_DESC) {
    id
    slug
    createdAt
    featuredImage {
      url
    }
    title
  }
}
  `
  const result:any = await request(graphqlAPI, query);
  console.log(result);
  return result.posts
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories(orderBy:createdAt_DESC) {
          name
          slug
        }
    }
  `;

  const result:any = await request(graphqlAPI, query);

  return result.categories;
};
export const getPostDetails = async (slug:string) => {
  const query = gql`
     query MyQuery {
  post(where: {slug:react-testing}) {
    title
    excerpt
    featuredImage {
      url
    }
    author {
      name
      bio
      photo {
        url
      }
    }
    slug
    createdAt
    content {
      raw
    }
    category {
      name
      slug
    }
  }
}
  `

  const results:any = await request(graphqlAPI, query, { slug });
  return results.post
};  