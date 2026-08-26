export default async function Page( {params}:{params:{memid:string}}  ) {
    const { memid } = await params;

    return (
        <div>
            <h1>Member Vip</h1>
            <h2>memid: {memid}</h2>
        </div>
    );
}