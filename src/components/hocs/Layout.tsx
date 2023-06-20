import { FunctionComponent, ReactNode, useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/utils/Loading";
import Navbar from "../navbar/Navbar";

export interface LayoutProps {
    title?: string;
    content?: string;
    children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({
    title = 'TweetBook',
    content = 'Let\'s connect together on tweetbook - Home',
    children
}) => {
    const router = useRouter();
    const session = useSession();
    
    useEffect(() => {
        if(session.status === 'unauthenticated') {
            router.push('/auth/login');
        }
    }, [session]);
    
    if(session.status === 'loading') return <Loading />;
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={content}/>
            </Head>
            <div>
                <Navbar />
                <div className="px-4 sm:px-6 md:px-20">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;