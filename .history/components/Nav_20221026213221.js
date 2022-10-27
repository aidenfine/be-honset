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
            <Link href="/about">
            <button className="flex items-center gap-2" >About</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                <Link href={"/login"} className="py-1.5 px-4 text-sm bg-indigo-500 text-white opacity-87 rounded-lg font-medium ml-8">Sign Up</Link>
            )}
            {user && (
                <div className="flex items-center gap-6">
                    <Link href="/new-post">
                    <button className="font-medium bg-indigo-500 text-white py-2 px-4 rounded-lg text-sm">Create Post</button>
                    </Link>
                    <Link href="/dashboard">
                        <img className="w-10 rounded-full cursor-pointer" referrerpolicy="no-referrer" src={user.photoURL} />

                    </Link>
                </div>
            )}
            </ul>

            
            
        </nav>
    )
}