import express from 'express';
import cors from "cors";
import fetch from "node-fetch";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/data', async (req, res) => {
    const { code } = req.body;
    
    const inputBody = {
        'grant_type': 'authorization_code',
        'code': code
    };

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization':'Basic YzA0MmMyMjYtYjZkNS00NTk0LThhZjEtZGM0MzhkNTQyZDZhOmZkZmI3NDBmLWExZmMtNDY2ZS05NjE1LWJkMTRhZmU3ODExNw==',
    };

    const options = {
        method: 'POST',
        body: new URLSearchParams(inputBody),
        headers: headers
    };

    const getResponse = async () => {

        const theFetch = await fetch('https://polarremote.com/v2/oauth2/token', options);
        const theData = await theFetch.json();
        // console.log('theData', theData)
        return theData
    }

    const response = await getResponse()
    // console.log('response:', response)
    res.status(200).json(response);
    
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});