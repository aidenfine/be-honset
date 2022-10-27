import Link from "next/link"

export default function Nav(){
    
    return(
        <nav className="">
            <Link href="/">
            <button>beHonset...</button>
            </Link>
            <ul>
                <Link href={"/login"}>
                    <a>Sign Up</a>
                
                </Link>
            </ul>
            
        </nav>
    )
}