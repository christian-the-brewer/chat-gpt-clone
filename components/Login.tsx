'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Logo from '@component/public/chatgptlogo.png'

function Login() {
    return (
        <div>
            <Image 
                src={Logo}
                width={300}
                height={300}
                alt='logo'
            />
            <button>Sign In to use ChatGPT</button>
        </div>
    )
}

export default Login