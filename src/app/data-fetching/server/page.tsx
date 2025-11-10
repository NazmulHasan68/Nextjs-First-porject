interface Product {
    id : number;
    title : string;
    price : number;
    category : string;
}

interface ProductRespose {
    products : Product[];
    total : number;
}


async function getProducts():Promise<ProductRespose> {
    const response = await fetch('https://dummyjson.com/products');

    if(!response.ok){
        throw new Error('Failed to fetch products')
    }

    return response.json()
}

export default async function ServerFeatch() {
    const products = await getProducts()
    return (
        <div>
            <h1>Server Side featch</h1>
            {products?.total}
            <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                {
                    products?.products?.map(product=>(
                        <div key={product.id} className="bg-sky-50 shadow-md text-black p-4">
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <p>{product.category}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}