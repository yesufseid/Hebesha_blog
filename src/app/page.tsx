import { PostCard,Categories,Postwidget } from "./Components";

export default function Home() {
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
