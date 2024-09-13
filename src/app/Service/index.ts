import { gql, request } from 'graphql-request'
const GRAPHQL_INDPOINT:string=process.env.GRAPHQL_INDPOINT

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

const results=request(GRAPHQL_INDPOINT,query)

}