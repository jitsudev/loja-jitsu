import Produto from "../components/produto";

export default function Page() {
  return (
    <>
      {[...Array(10)].map((e, i) => (
        <Produto key={i} slug="camisa-estampada" />
      ))}
    </>
  );
}
