"use client"
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useSelector} from "react-redux";

function AuthGuard() {
    const token = useSelector( (state: any) => state.auth.token);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push('/login')
        }
    }, [token])


    return(
        <></>
    );
}

export default AuthGuard;