import Link from "next/link"

export default function Nav(){
    
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
            <button className="text-lg font-medium text-slate-300">beHonset...</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href={"/login"} className="py-1.5 px-4 text-sm bg-purple-200 text-white rounded-lg font-medium ml-8">Sign Up</Link>
            </ul>
            
        </nav>
    )
}