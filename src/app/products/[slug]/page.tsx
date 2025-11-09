
export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  // Server Component

  const {slug} = await params

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Product {slug}</h1>
    </div>
  );
}
