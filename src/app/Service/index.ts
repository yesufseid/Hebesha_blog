import { gql, request } from 'graphql-request'
const GRAPHQL_INDPOINT=process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "hellow"

export const Getpost=async()=>{
  console.log(GRAPHQL_INDPOINT);
  
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

const results:any=await request(GRAPHQL_INDPOINT,query)
return results.postsConnection.edges
}
