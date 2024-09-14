import { Url } from "next/dist/shared/lib/router/router"

type PostProps={
    postsConnection:EdageProps
}

type AutorProps={
    bio:string
    id:string
    photo:{url:any}
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
    featuredImage:{url:any}
    category:CategoryProps
  }

  type EdageProps={
    edges:NodeProps
  }
  export default NodeProps