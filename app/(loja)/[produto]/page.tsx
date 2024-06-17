import Filtros from "../../components/filtros";
import Produto from "../../components/produto";

export default function Page({ params }: { params: { produto: string } }) {
  return (
    <>
      <Filtros />
      {[...Array(10)].map((e, i) => (
        <Produto key={i} tipo={params.produto} slug="camisa-estampada" />
      ))}
    </>
  );
}
