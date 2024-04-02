import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Clock from 'components/Clock';
import Counter from 'components/counterApp';
import TimerApp from 'components/timerApp';





const bgs = [
  { title:"Artur Schnabel"  ,
  src:"Artur Schnabel.png" },
{ title:"Alfred Brendel" ,
src:"Alfred Brendel.png"},
{ title:"Alfred Cortot" ,
src:"Alfred Cortot.png"},
{ title:"Artur Rubenstein" ,
src:"Artur_Rubenstein_1968.jpeg"},
{ title:"Beethoven" ,
src:"beethoven-moonlight-sonata.jpeg"},
{ title:"Emil Gilels" ,
src:"Emil Gilels.jpeg"},
{ title:"Franz Liszt" ,
src:"Franz_Liszt.jpeg"},
{ title:"Glenn Gould" ,
src:"Glenn Gould .png"},
{ title:"Jean Sebastien Bach" ,
src:"jean-sebastien-bach-i137012.jpeg"},
{ title:"Josef Hofman" ,
src:"Josef_Hofman_03.jpeg"},
{ title:"Sergei Rachmaninov" ,
src:"Sergei Rachmaninov.png"},
{ title:"Sergei Rachmaninoff" ,
src:"Sergei_Rachmaninoff_cph.3a40575.jpg"},
{ title:"Sviatoslav Richter" ,
src:"Sviatoslav Richter.png"},
{ title:"Vladimir Horowitz" ,
src:"vladimir-horowitz.jpeg"},
{ title:"Wilhelm Kempff" ,
src:"Wilhelm Kempff.png"},
{ title:"Wolfgang Amadeus Mozart" ,
src:"Wolfgang-Amadeus-Mozart-Maria-Anna-oil-parents.jpg"}
]


export default function Homepage({  }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [isSoundOn, setSound] = useState(false);

  const toggleSound = ()=> {
    setSound(!isSoundOn);
  }
  


   useEffect(() => {
        setInterval(()=>{
    if(document){
    const bgElem = document.getElementById("bg")
    const titleElem = document.getElementById("title")
    const elem =  Math.floor(Math.random() * (bgs.length-1 - 0 + 1)) + 0;
    if(bgElem){
    bgElem.style.backgroundImage = `linear-gradient(45deg, rgba(0,0,0, 0.85), rgba(0,0,0, 0.90)),url('${bgs[elem].src}')`;
    bgElem.style.backgroundSize = "cover";
    bgElem.style.backgroundRepeat = "no-repeat";
    bgElem.style.backgroundPosition = "initial";
    }
    if(titleElem)
    titleElem.innerText = bgs[elem].title;
    }
  },60000);
    }, []);
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
          background: "linear-gradient(45deg, rgba(0,0,0, 0.85), rgba(0,0,0, 0.90)), url('Josef_Hofman_03.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "initial",
          backgroundRepeat: "no-repeat",
          display:"flex",
          flexDirection: "column",
          transition: "background-image 0.7s ease-in-out",
        }}>
           <div 
           id="title"
           style={{
            opacity: "20%",
            position: "fixed",
            color: "white",
            bottom:"10px",
            right:"10px",
        }}
           >
            Josef Hofman
          </div>
           <div 
           id="title"
           style={{
            opacity: "20%",
            position: "fixed",
            color: "white",
            top:"10px",
            right:"10px",
        }}
          onClick={toggleSound}
           >
            Sound{isSoundOn?": On":": Off"}
            
          </div>
           
          <div id="pipContainer">
           <Clock />
          <TimerApp />
          </div>
          <Counter isSoundOn={isSoundOn} />
        </div>    </>
  );
}



export async function getStaticProps() {
  return {
    props: {
      
    },
  };
}
