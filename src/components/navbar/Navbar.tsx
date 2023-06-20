import { signOut, useSession } from "next-auth/react";
import ThemeToggler from "@/components/utils/ThemeToggler";
import LogoutButton from "@/components/navbar/LogoutButton";

const Navbar = () => {
    const {data: session} = useSession();
    return (
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-20 py-6">
            <ThemeToggler />
            <div className="flex items-center space-x-4">
                <h1 className="text-xl">
                    Welcome,{' '}
                    <span className="text-2xl underline underline-offset-2">
                        {session?.user.username}
                    </span>
                </h1>
                <LogoutButton />
            </div>
        </div>
    );
};

export default Navbar;