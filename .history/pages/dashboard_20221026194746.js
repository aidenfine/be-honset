import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useState } from "react";
import { async } from "@firebase/util";
import Router from "next/router";





export default function Dashboard(){

    const [SuccessMessage, setSuccessMessage] = useState('');

    const route = Router
    const [user, loading] = useAuthState(auth)

    //check list
    const getData = async() => {
        if(loading) return;
        if(!user){
            route.push("/login")

        }
    };

    //get user Data
    useEffect(() =>{
        getData();
    }, [user, loading]);


    const signOutHandle{
        auth.signOut()
    }


    // () => auth.signOut()




    return(
        <div>
            <h1>Your Posts</h1>
            <div>Posts</div>
            <button onClick={signOutHandle()}>Sign out</button>
        </div>
    )

}