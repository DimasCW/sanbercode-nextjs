import dynamic from  "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic (() => import("@/layout"))

export default  function Main(){

  return(
    <>
      <LayoutComponent metaTitle="Home">
        <ul>
          <li>
            <Link href="/notes">Notes</Link>
            </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </LayoutComponent>
    </>

  );
}