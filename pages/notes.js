import dynamic from  "next/dynamic";

const LayoutComponent = dynamic (() => import("@/layout"))


export default  function Notes({notes}){

  console.log("notes =>", notes)

  return(
    <>
      <LayoutComponent metaTitle="Home">
        {notes.data.map((item) => (
          <div style={{marginBottom : "10px"}}>
          <p>{item.company_name}</p>
          <p>{item.job_type}</p>

          </div>
        ))}
      </LayoutComponent>
    </>

  );
}

export async function getStaticProps() {
  const res = await fetch('https://dev-example.sanbercloud.com/api/job-vacancy')
  const notes = await res.json()
  return { props: { notes }, revalidate : 5 }
}