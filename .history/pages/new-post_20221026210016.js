import { auth, db} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify'

export default function post(){

    const route = useRouter()
    const [post, setPost] = useState({ description: ""})
    const [user, loading] = useAuthState(auth);

    // console.log(user)

    //submit post

    const submitPost = async (e) => {
        e.preventDefault();

        // run checks

        if(!post.description){
            toast.error("No Characters")
        }

        // make post
        const collectionRef = collection(db, 'posts');
        await addDoc(collectionRef, {
            ...post,
            timestamp: serverTimestamp(),
            user: user.uid,
            avatar: user.photoURL,
            username: user.displayName
        });
        setPost({ description: "" });
        return route.push("/")

    }
    
    
    return(
        <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
            <form onSubmit={submitPost}>
                <h1 className='text-2xl font-bold'>New Post</h1>
                <div>
                    <textarea value={post.description} 
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    className='bg-slate-800 h-28 w-full text-white rounded-lg text-sm p-1'></textarea>
                    <p className={`font-medium text-sm ${post.description.length > 200 ? 'text-red-600 font-bold' : ''}`}>{post.description.length}/200</p>
                </div>
                <button type='submit'
                className='w-full bg-indigo-500 text-white font-medium p-2 my-2 rounded-lg text-sm '>Submit</button>
            </form>
        </div>
    )
}

