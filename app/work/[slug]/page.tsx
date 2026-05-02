interface SingleWorkPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleWorkPage({ params }: SingleWorkPageProps) {
  const { slug } = await params;

  return (
    <div>
      <p>{slug}</p>
    </div>
  );
}
