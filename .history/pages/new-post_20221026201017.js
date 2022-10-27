import { auth, db} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function post(){

    const [post, setPost] = useState({ description: ""})
    
    
    return(
        <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
            <form>
                <h1 className='text-2xl font-bold'>New Post</h1>
                <div>
                    <textarea className='bg-slate-800 h-28 w-full text-white rounded-lg text-sm p-1'></textarea>
                    <p>0/200</p>
                </div>
                <button className='w-full bg-indigo-500 text-white font-medium p-2 my-2 rounded-lg text-sm '>Submit</button>
            </form>
        </div>
    )
}

