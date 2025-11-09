export default async function Catch({params} : {params : Promise<{slug:string}>}) {
    const{slug} =await params
    return (
        <div>this is  {slug} </div>
    );
}