'use client'

import { usePathname } from 'next/navigation'

export const Header = () => {

    const pathName = usePathname();

    return <header>
        <nav>
            {siteMap.filter(page => page.path !== pathName)
                .map(page => <a key={page.path} target={page.target} href={page.path}>{page.text}</a>)
            }
        </nav>
    </header>
}

const siteMap : Page[] = [
    {
        path : '/',
        text : 'Home'
    },{
        path : '/api/auth/signin',
        text : 'Login'
    },
];

interface Page {
    path : string
    text : string
    target? : string
}