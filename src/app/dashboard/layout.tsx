import Link from "next/link";

// this layout only applied to /deshboard/*
export default function CommonAdminDashboardLayout({children} : {children : React.ReactNode}) {
    return (
        <div>
            <div className="flex gap-4">
                <aside className="w-64 p-4 border-r">
                    <h1>Dashboard</h1>
                    <nav>
                        <ul>
                            <li><Link href={`/dashboard`}>Dashboard home</Link></li>
                            <li><Link href={`/dashboard/analytics`}>Dashboard Analytics</Link></li>
                        </ul>
                    </nav>
                </aside>

                <div className="flex p-4 ">
                    {children}
                </div>
            </div>
        </div>
    );
}