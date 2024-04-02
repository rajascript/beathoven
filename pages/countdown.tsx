import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Countdown from 'components/countdownApp';



export default function CountdownPage({  }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [isSoundOn, setSound] = useState(false);

  const toggleSound = ()=> {
    setSound(!isSoundOn);
  }
  


  return (<>
  <Head>
    <title>Beathoven</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="image/png" href="/favicon.ico" />
  </Head>
        <div 
          id="bg"
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          backgroundSize: "cover",
          backgroundPosition: "initial",
          backgroundRepeat: "no-repeat",
          display:"flex",
          flexDirection: "column",
          transition: "background-image 0.7s ease-in-out",
        }}>
           
           
          <div id="pipContainer" style={{background: "black",}}>
          
          <Countdown />
          </div>
        </div>    </>
  );
}



export async function getStaticProps() {
  return {
    props: {
      
    },
  };
}
