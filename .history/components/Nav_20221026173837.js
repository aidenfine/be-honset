import Link from "next/link"

export default function Nav(){
    
    return(
        <nav className="flex justify-between">
            <Link href="/">
            <button>beHonset...</button>
            </Link>
            <ul>
                <Link href={"/login"}>Sign Up</Link>
            </ul>
            
        </nav>
    )
}