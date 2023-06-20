import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            username: string;
            first_name: string;
            last_name: string;
            email: string;
            profile: {
                dob: Date;
                gender: string;
                profile_picture: string;
                cover_picture: string;
                bio: string;
                relationship_status: string;
            };
            access: string;
            refresh: string;
        }
    }
};