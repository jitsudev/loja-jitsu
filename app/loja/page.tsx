import Filtros from "../components/filtros";
import Produto from "../components/produto";

export default function Page() {
  return (
    <>
      <Filtros />
      {[...Array(10)].map((e, i) => (
        <Produto key={i} slug="camisa-estampada" />
      ))}
    </>
  );
}
