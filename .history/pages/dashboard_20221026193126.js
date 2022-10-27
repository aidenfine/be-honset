import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";




export default function Dashboard(){
    const route = useRouter
    const [user, loading] = useAuthState(auth)



    return(
        <div>
            <h1>Your Posts</h1>
            <div>Posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )

}