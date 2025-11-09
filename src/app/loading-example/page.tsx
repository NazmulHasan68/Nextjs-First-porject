
async function getDeta() {
    await new Promise((resolve)=> setTimeout(resolve , 2000))

    return {
        start : {
            users : 1000
        }
    }
}

export default async function Pagelaoding() {
    const data = await getDeta()
    return (
        <div className=" p-4 ">
            <h1>Loading explate </h1>
            <p className="font-bold"> This is Bangladesh {data.start.users}</p>
        </div>
    );
}


