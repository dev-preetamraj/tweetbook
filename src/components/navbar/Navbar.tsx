import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    BellIcon,
    InboxIcon
} from '@heroicons/react/24/outline';
import ThemeToggler from "@/components/utils/ThemeToggler";
import LogoutButton from "@/components/navbar/LogoutButton";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

const Navbar = () => {
    const {data: session, status} = useSession();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0) setIsScrolled(true);
            else setIsScrolled(false);
        });
    }, [window]);
    

    return (
        <div
            className={`w-full ${isScrolled ? 'shadow-lg' : 'border-b dark:border-gray-700'} backdrop-blur-md bg-transparent sticky top-0`}
        >
            <Container>
                <div className="flex items-center justify-between py-6">
                    <div className="flex items-center space-x-4">
                        <Bars3Icon className="h-6 w-6 cursor-pointer md:hidden" />
                        <div className="flex items-center space-x-4 pl-10 md:pl-0">
                            <Logo size='md' />
                            <div className="flex md:hidden flex-col">
                                <p className="font-semibold">Online</p>
                                <p className="font-semibold">Communities</p>
                            </div>
                        </div>
                    </div>
                    
                    <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
                    
                    <div className={`${status==='authenticated' ? 'flex' : 'hidden'} items-center space-x-4`}>
                        <ThemeToggler />
                        <InboxIcon className="h-6 w-6 cursor-pointer" />
                        <BellIcon className="h-6 w-6 cursor-pointer" />
                        <LogoutButton />
                    </div>

                    <div>
                        <Link className='text-lg font-semibold text-black dark:text-white' href='/auth/login'>Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;