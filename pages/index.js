import dynamic from  "next/dynamic";
import Image from "next/image"; 
import { useEffect } from "react"; 

const LayoutComponent = dynamic (() => import("@/layout"))

export default  function Main(){
  useEffect(()=> {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((res)=> console.log("response =>", res))
    .catch((err) => console.log("err =>", err));
  },[]);

  return(
    <>
      <LayoutComponent metaTitle="Home">
        Home
        <Image src="/icon.png" width={300} height={300} alt="huaa" />
      </LayoutComponent>
    </>

  );
}