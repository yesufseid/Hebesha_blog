"use client"
import { Categories, Postwidget } from '../../Components';
import {getPostDetails} from "../../Service"
import { useEffect,useState} from 'react';
import {PostDetail} from "../../Components"
import {PostProps} from "../../types"


export default function Page({ params }: { params: { slug: string } }) { 
  const [post,setPost]=useState<any>({});
  useEffect(() => {
    getPostDetails(params.slug).then((posts:any) => {
      setPost(posts) 
    });
  }, []);
    return (
        <>
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail  post={post} />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
            
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // export async function generateStaticParams({params}) {
  //   console.log(params);
    
  //     const data = await getPostDetails(params.slug)
  //     return {
  //         props:{post:data}
  //     }
  //   }