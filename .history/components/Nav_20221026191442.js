import Link from "next/link"
import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Nav(){
    const [user, loading] = useAuthState(auth);
    
    return(
        <nav className="flex justify-between items-center py-10">
            <Link href="/">
            <button className="text-lg font-medium text-black opacity-87" >beHonset.</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                <Link href={"/login"} className="py-1.5 px-4 text-sm bg-indigo-500 text-white opacity-87 rounded-lg font-medium ml-8">Sign Up</Link>
            )}
            {user && (
                <div>
                    <Link href="/new-post">
                    <button>Post</button>
                    </Link>
                    <Link href="/dashboard">
                        <h1>Dashboard</h1>

                    </Link>
                </div>
            )}
            </ul>

            
            
        </nav>
    )
}