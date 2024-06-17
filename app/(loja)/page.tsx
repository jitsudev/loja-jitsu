import Produto from "../components/produto";

export default function Page() {
  return (
    <>
      <h1>Página inicial com destaques e lançamentos...</h1>
      {[...Array(10)].map((e, i) => (
        <Produto key={i} slug="camisa-estampada" />
      ))}
    </>
  );
}
