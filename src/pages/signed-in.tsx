import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import React from "react";





export default function SignedIn({ joke }: InferGetServerSidePropsType<typeof getServerSideProps>) {


  return (
    
    <div>
    <link href="https://uploads-ssl.webflow.com/63e9e4f0d5ced91c78ca35c5/css/kennys-trendy-site-b8e717.webflow.1262a4e6c.css" rel="stylesheet" type="text/css" />
    <div className="container">
      <h1 className="centered-heading margin-bottom-32px">Signed-in</h1>
      <div className="hero-wrapper">
        <div className="hero-split">
          <p className="margin-bottom-24px">{joke.data[0].setup}</p>
          <p className="margin-bottom-24px">{joke.data[0].punchline}</p>
          <a href="http://localhost:3000/signed-in" className="button-primary w-button">click to get new jokes</a>
        </div>
        <img src="https://uploads-ssl.webflow.com/63e9e4f0d5ced91c78ca35c5/63e9e57d52c350806f6041fa_icon_white_resized-150x150.png" loading="lazy" width={161} alt="" className="shadow-two" />
      </div>
    </div>
  </div>
)
              
              
            

    


    
    
   
    
    
  
}
    



// Task 2: Fetch random jokes from the API
// https://official-joke-api.appspot.com/jokes/programming/random
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API and pass it to the page via props.joke
  const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const data = await res.json();
  return {
    props: { 
      
      joke: {data

      },
    }, // will be passed to the page component as props
  }
}