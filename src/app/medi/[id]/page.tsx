export default async function MediDetails( {params} : {params : Promise<{id:String}>}) {
    const {id} = await params
    return (
        <div>this is number {id}</div>
    );
}