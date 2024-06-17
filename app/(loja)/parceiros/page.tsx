function Parceiro({ title, description }: any) {
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
      <h1>Parceiros</h1>
      {[...Array(8)].map((e, i) => {
        <Parceiro
          key={i}
          title={"Parceiro" + i}
          description="Descrição do parceiro"
        />;
      })}
    </>
  );
}
