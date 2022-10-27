import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { async } from "@firebase/util";




export default function Dashboard(){

    const route = useRouter
    const [user, loading] = useAuthState(auth)

    //check list
    const getData = async() => {
        if(loading) return;
        if(!user) return route.push('/auth/login');
    };

    //get user Data
    useEffect(() =>{
        getData();
    }, [user, loading]);




    return(
        <div>
            <h1>Your Posts</h1>
            <div>Posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )

}