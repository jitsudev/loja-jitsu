import CardProduto from "../components/cardproduto";

export default function Page() {
	return (
		<>
			<h1>Página inicial com destaques e lançamentos...</h1>
			{[...Array(10)].map((e, i) => (
				<div key={i}>Empty</div>
			))}
		</>
	);
}
