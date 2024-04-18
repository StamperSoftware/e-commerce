'use client'
import { useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Admin() {

    const { data: session, status } = useSession()
console.log(session)
    const loading = status === 'loading'

    if (loading) return null;

    if (!session?.user?.isAdmin) redirect('/');

    return (
        <div className='text-center'>
            <h1 className='mt-10 font-extrabold text-2xl mb-8'>Admin</h1>
        </div>
    )
}