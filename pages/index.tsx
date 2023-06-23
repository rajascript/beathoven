import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
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
src:"Franz_Liszt_1858.jpeg"},
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
{ title:"vladimir Horowitz" ,
src:"vladimir-horowitz.jpeg"},
{ title:"Wilhelm Kempff" ,
src:"Wilhelm Kempff.png"},
{ title:"Wolfgang Amadeus Mozart" ,
src:"Wolfgang-Amadeus-Mozart-Maria-Anna-oil-parents.jpg"}
]

export default function Homepage({  }: InferGetStaticPropsType<typeof getStaticProps>) {
  
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
    }
    if(titleElem)
    titleElem.innerText = bgs[elem].title;
    }
  },60000);
    }, []);
  return (<>
  <Head>
    <title>Beathoven</title>
    <link rel="icon" type="image/png" href="/favicon.ico" />
  </Head>
        <div 
          id="bg"
          className='slide_photo'
        style={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(45deg, rgba(0,0,0, 0.85), rgba(0,0,0, 0.90)), url('Artur Schnabel.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display:"flex",
          flexDirection: "column",
          padding: "50px 0",
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
            Artur Schnabel
          </div>
          <TimerApp />
          <div
          style={{marginBottom:"120px"}}
          />
          <Counter />
        </div>    </>
  );
}



export async function getStaticProps() {
  return {
    props: {
      
    },
  };
}
