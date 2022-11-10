import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useState } from "react";
import { async } from "@firebase/util";
import Router from "next/router";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import  Message  from '../components/Message'





export default function Dashboard(){

    const [SuccessMessage, setSuccessMessage] = useState('');

    const route = Router
    const [user, loading] = useAuthState(auth)
    const [posts, setPosts] = useState([])

    //check list
    const getData = async() => {
        if(loading) return;
        if(!user){
            return route.push("/login")
        }
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, where('user', '==', user.uid))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({...doc.data()})))
        });
        return unsubscribe;
    };

    //get user Data
    useEffect(() =>{
        getData();
    }, [user, loading]);


    // () => auth.signOut()

    return(
        <div>

            <h1>Your Post's</h1>
            <div>
                {posts.map((post) =>{
                    return(
                        <Message {...post} key={post.id}></Message>
                    );
                })}
            </div>
            <div>Posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )

}