"use client"

import useSWR from "swr";

interface Product {
    id : number;
    title : string;
    price : number;
    category : string;
}



const fetcher = ( url:string ) => fetch(url).then(r => r.json())

export default function SWR() {
    const {data, error, isLoading, mutate} = useSWR('https://dummyjson.com/products', fetcher,
        {
        revalidateOnFocus: false,
        refreshInterval : 30000,
        errorRetryCount : 3,
    })

    console.log(data, error, isLoading);
    

    if(isLoading){
        return <h1>Loading...</h1>
    }

    
    if(error){
        return <h1 className="text-red-600">{error.message}</h1>
    }

    const handleRefresh = () =>{
        mutate()
    }


    return (
        <div>
            <h1>Swr examplete</h1>
            <button onClick={handleRefresh} className="px-4 py-2 rounded-2xl bg-green-600">Refresh</button>
            <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                {
                    data?.products?.map((product:Product)=>(
                        <div key={product.id} className="bg-sky-50 shadow-md text-black p-4">
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <p>{product.category}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}