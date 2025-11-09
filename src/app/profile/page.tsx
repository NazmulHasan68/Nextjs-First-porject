'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Profile() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

     console.log(searchParams.getAll('name'));
     

    const handleNavigate = () =>{
        router.push('/')
    }
    
    return (
        <div>
            <h1>Profile component client</h1>
            <button onClick={handleNavigate} className="px-6 py-2 rounded-3xl bg-sky-700">Navigate to home oage</button>
        </div>
    );
}