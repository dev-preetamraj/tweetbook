import { useSession } from "next-auth/react";

const Avatar = () => {
    const {data: session, status} = useSession();
    return (
        <div className="hidden md:flex items-center space-x-2 cursor-pointer">
            <h1 className="text-lg text-gray-700 dark:text-gray-200 font-semibold underline underline-offset-4">{session?.user.username}</h1>
            <div className="h-12 w-12 rounded-full bg-purple-500" />
        </div>
    );
};

export default Avatar;