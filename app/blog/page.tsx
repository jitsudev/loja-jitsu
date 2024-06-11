function Post({ title, description }: any) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>Blog</h1>
      {[...Array(8)].map((e, i) => {
        <Post key={i} title="Post" description="Apenas mais um post" />;
      })}
    </>
  );
}
