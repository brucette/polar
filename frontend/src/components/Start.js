import React, { useState } from "react";

export const Start = () => {
    const [myData, setMyData] = useState([]);

    const fetchPolar = async () => {
        const data = fetch('https://flow.polar.com/oauth2/authorization?response_type=code&client_id=c042c226-b6d5-4594-8af1-dc438d542d6a')
        const response = await data
        setMyData(response)
    }
    return (
        <>
            {/* <button onClick={fetchPolar}>Request Polar data</button> */}
            <a href='https://flow.polar.com/oauth2/authorization?response_type=code&client_id=c042c226-b6d5-4594-8af1-dc438d542d6a'>
                Request Polar data
            </a>
            {/* {myData.map((item) => {
                return <p>{item}</p>
            })} */}
            {console.log(myData)}
        </>
    )
};