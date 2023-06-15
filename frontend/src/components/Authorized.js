import React from "react";
import { useSearchParams } from "react-router-dom";

export const Authorized = () => {
    // useEffect(() => {
    //     fetch('http://localhost:8080/oauth2_callback')

    // }
    // )
    const [searchParams] = useSearchParams();

    const code = searchParams.get('code');
    
    return <h1>Hello! {code}</h1>
}