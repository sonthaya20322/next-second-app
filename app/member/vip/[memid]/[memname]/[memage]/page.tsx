export default async function Page( {params}:{params:{memid:string,memname:string,memage:string}}  ) {
    const { memid, memname, memage } = await params;

    return (
        <div>
            <h1>Member Vip</h1> 
            <h2>memid: {memid}</h2>
            <h2>memname: {memname}</h2>
            <h2>memage: {memage}</h2>
        </div>
    );
}