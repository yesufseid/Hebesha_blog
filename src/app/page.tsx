import { PostCard,Categories,Postwidget } from "./Components";
import { Getpost } from "./Service";



// export async function generateStaticParams() {
//   const posts = (await Getpost()) ||[]
//     console.log(posts);
    
//   return posts
// }

export default function Home() {
  const post=async()=>{
    const posts=await Getpost()
    console.log(posts);
    
  }  
 
  post()
  return (
    <div className="container px-10 mx-auto mb-8" >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" >
           <div className="lg:col-span-8 col-span-1 ">
                 {[1,2].map(()=> <PostCard />)}
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
