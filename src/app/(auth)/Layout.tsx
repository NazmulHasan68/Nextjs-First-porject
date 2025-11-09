import Link from "next/link";

export default function LayoutAuth({children} : { children : React.ReactNode}) {
    return (
        <div>
            <header className=" mac-w-4xl mt-10 bg-green-600 mx-auto flex justify-between items-center">
                <h1>LOGO </h1>
                <nav className="flex gap-4">
                    <Link href={"/login"}>Login</Link>
                    <Link href={"/register"}>Register</Link>
                </nav>
            </header>
            <div className="py-12">
                {children}
            </div>
        </div>
    );
}