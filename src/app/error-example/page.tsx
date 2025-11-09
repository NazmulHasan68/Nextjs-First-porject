
async function getProduct() {
    //simulate a dummy error here

    const shouldError = Math.random() > 0.5
    if(shouldError) throw new Error('Failed to fetch products')

    return [
        { id : 1, name: "one"},
        { id : 2, name: "two"},
        { id : 3, name: "three"},
    ]
}

export default async function ErrorExaple() {
    const products = await getProduct()
    return (
        <div>
                <h1>Product list </h1>
                <div className=" grid gap-4">
                    {
                        products.map(product =>(
                            <div key={product.id}>
                                <p>{product.name}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}