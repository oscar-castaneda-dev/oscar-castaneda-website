interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <div>
      <p>{slug}</p>
    </div>
  );
}
