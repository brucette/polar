import React, {useState} from "react";
import { useSearchParams } from "react-router-dom";

export const Authorized = () => {
    const [userData, setUserData] = useState({});
    
    const [searchParams] = useSearchParams();

    const code = searchParams.get('code');
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code
        })
    };

    const getData = async () => {
        const data = await fetch('http://localhost:8080/data', options);
        console.log('data:', data)
        // const result = await data;
        // console.log('result', result)
        // setUserData(result);
        // console.log(userData)
    };

    return (
        <>
            Hello! {code}
            <button 
                type='button'
                onClick={getData}>
                    Get data
            </button>
        </>
    )
}