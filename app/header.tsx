import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const Header = () => {

    const pathName = usePathname();
    const {data:session,status} = useSession();
    
    if (status === 'loading') return null;
    
    if (!session) {
        siteMap = siteMap.filter(page => page.id !== 'logout');
    } else {
        siteMap = siteMap.filter(page => page.id !== 'login');
    }
    
    if (!session?.user?.isAdmin) {
        siteMap = siteMap.filter(page => !page.isAdminOnly)
    }
        
    return <header>
        <nav>
            {siteMap.filter(page => page.path !== pathName)
                .map(page => <a key={page.path} target={page.target} href={page.path}>{page.text}</a>)
            }
        </nav>
    </header>
}

let siteMap : Page[] = [
    {
        path : '/',
        text : 'Home',
        id : 'home'
    },
    {
        path : '/api/auth/signin',
        text : 'Login',
        id : 'login'
    },
    {
        path : '/api/auth/signout',
        text : 'Logout',
        id : 'logout'
    },
    {
        path : '/admin',
        text : 'Admin',
        isAdminOnly : true,
        id : 'admin'
    },
];

interface Page {
    path : string
    text : string
    id : string
    target? : string
    isAdminOnly? : boolean
}