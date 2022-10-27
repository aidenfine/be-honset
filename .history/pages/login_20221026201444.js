import { FcGoogle } from "react-icons/fc"
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import { auth } from "../utils/firebase";
import {useRouter} from "next/router"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from "react";






export default function Login(){
    const route = useRouter();
    const [user, loading] = useAuthState(auth);

    // Google Sign in

    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            route.push("/")
            console.log("logged in")
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        if(user){
            route.push('/');
        }else{
            console.log("login")
        }

    }, [user]);
    return(
        <div className="justify-center items-center shadow-xl w-25 mt-32 p-10 text-black rounded-lg bg-white">
            <h2 className="text-2xl font-medium">Join Now</h2>
            <div>
                <h3 className="py-4">Sign in</h3>
                <button onClick={GoogleLogin} className="text-white bg-gray-700 w-65 font font-medium rounded-lg flex align-middle p-4">
                    <FcGoogle className="text-2xl"/>
                    Sign in with Google
                </button>
            </div>
        </div>

    )
}