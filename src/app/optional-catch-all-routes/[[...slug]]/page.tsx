export default async function optional({params} : {params : Promise<{slug?:string}>}) {
    const{slug} =await params
    return (
        <div>this is option {slug} </div>
    );
}