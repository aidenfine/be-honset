import Link from "next/link"

export default function Nav(){
    
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
            <button className="text-lg font-medium">beHonset...</button>
            </Link>
            <ul>
                <Link href={"/login"}>Sign Up</Link>
            </ul>
            
        </nav>
    )
}