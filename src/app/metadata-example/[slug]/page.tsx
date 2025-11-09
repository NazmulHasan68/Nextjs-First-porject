import { Metadata } from "next";

const dummyData = {
  "1": {
    title: "one",
    desc: "This is the first item",
  },
  "2": {
    title: "two",
    desc: "This is the second item",
  },
  "3": {
    title: "three",
    desc: "This is the third item",
  },
};

// ✅ generateMetadata ফাংশন
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const id = slug[0];
  const data = dummyData[id as keyof typeof dummyData];

  if (!data) {
    return {
      title: "Not Found",
      description: "No data available for this slug",
    };
  }

  return {
    title: data.title,
    description: data.desc,
  };
}

// ✅ Page Component
export default async function DynamicMetadataExample({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const id = slug[0];
  const data = dummyData[id as keyof typeof dummyData];

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
    </div>
  );
}
