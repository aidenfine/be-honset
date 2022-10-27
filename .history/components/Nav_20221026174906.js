import Link from "next/link"

export default function Nav(){
    
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
            <button className="text-lg font-medium">beHonset...</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href={"/login"} className="py-2 px-4 text-sm bg text-slate-400 rounded-lg font-medium ml-8">Sign Up</Link>
            </ul>
            
        </nav>
    )
}