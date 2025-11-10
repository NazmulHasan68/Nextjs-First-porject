"use client"; 

import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Post {
    id :number,
    title : string,
    body : string,
}
interface PostResponse {
    post : Post[];
    total : number
}

export default function ReactQueryExample() {

    const queryClient = useQueryClient()

    const {data, isLoading, error, refetch} = useQuery({
        queryKey : ['posts'],
        queryFn : async()=>{
            const response = await fetch('https://dummyjson.com/posts');

            if(!response.ok){
                throw new Error('Failed to fetch posts')
            }

            return response.json()
        },
        staleTime :2 * 60 * 1000
    })

    if(isLoading) return <h1>Loading ... </h1>
    if(error) return <h1>Error ... </h1>

    return (
        <div>
            <h1>React Query Example</h1>
           <div className="grid grid-cols-3 gap-4 ">
                {data.posts.map((post:Post)=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
           </div>
        </div>
    );
}

// Me  : Can be my doctor?
// she : Most provably, if your are interest to be my techneshian ?
// Me  : what do you mean by techneshian . show some respect and say love you Mr. Engeenar ?
// she : Nop you are my techenoshian who will fixed my all the problem and keep me in your arm life time

//