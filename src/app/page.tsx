"use client"
import { PostCard,Categories,Postwidget } from "./Components";
import { Getpost } from "./Service";
import { useEffect,useState } from "react";
import NodeProps from '../../src//app/types'


export default function Home () {
  const [post,setPost]=useState([])
  useEffect(()=>{
   const Handler=async()=>{
      const post=await Getpost()
      return setPost(post)
   }
   Handler()
  },[])
 
  
  return (
    <div className="container px-10 mx-auto mb-8" >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" >
           <div className="lg:col-span-8 col-span-1 ">
               {post.map((p)=>{
                return(
                  <PostCard  post={p.node} key={p.node.title} />
                )
               })} 
           </div>
           <div className="lg:col-span-4 col-span-1" >
            <div className="lg:sticky relative top-8" >
                 <Postwidget />
                 <Categories />
            </div>
           </div>
      </div>
       
    </div>
  );
}


