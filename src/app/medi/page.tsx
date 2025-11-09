import Link from "next/link";

export default function Medi() {
    const medi = [
        { id : "1", name : "hello "},
        { id : "2", name : "hi "},
    ]
    return (
        <div className="max-w-4xl mx-auto flex gap-5 py-12">
            {
                medi.map(medi=>(
                    <Link key={medi.id} href={`medi/${medi.id}`}>{medi.name}</Link>
                ))
            }
        </div>
    );
}