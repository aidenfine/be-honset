import { auth, db} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function post(){
    
    
    return(
        <div className='my-20 p-12 shadow-lg rounded-lg max-w-md mx-auto'>
            <form>
                <h1 className='text-1.5xl font-bold'>New Post</h1>
                <div>
                    <textarea></textarea>
                    <p>0/150</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

