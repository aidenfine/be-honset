import { auth, db} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function post(){
    
    
    return(
        <div>
            <form>
                <h1>Create a new post</h1>
                <div>
                    <h3>
                        desc
                    </h3>
                    <textarea></textarea>
                    <p>0/150</p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

