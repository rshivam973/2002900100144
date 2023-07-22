import React from 'react';
import { useEffect } from 'react';

const GenToken = () => {

    const params= {
        "companyName": "Train Central",
        "ownerName": "Shivam Rajput",
        "rollNo": "2002900100144",
        "ownerEmail":"shivam2020cs094@abesit.edu.in",
        "accessCode":"FKDLjg"
    };

    const getToken = async () =>{
        try {
            const response = await fetch('http://20.244.56.144/train/register',params);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getToken();
      }, []);



  return (
    <div>
        genToken
    </div>
  )
}

export default GenToken;