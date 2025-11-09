'use client'

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <div className="max-w-2xl mx-auto py-12">
            <h1>The page you are looking for is not exists</h1>
            <button onClick={()=>router.push('/')} className=" px-4 py-2 rounded-3xl bg-green-500">Go to Home </button>
        </div>
    );
}