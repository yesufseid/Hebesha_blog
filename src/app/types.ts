import { Url } from "next/dist/shared/lib/router/router"

type PostProps={
    postsConnection:EdageProps
}

type AutorProps={
    bio:string
    id:string
    photo:Url
    name:string
}
type CategoryProps={
   name:string
   slug:string
}

 type NodeProps ={
    author:AutorProps
    createdAt:string
    slug:string
    title:string
    excerpt:string
    featuredImage:Url
    category:CategoryProps
  }

  type EdageProps={
    edges:NodeProps
  }
  export default PostProps