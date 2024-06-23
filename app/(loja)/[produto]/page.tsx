import Filtros from "../../components/filtros";
import CardProduto from "../../components/cardproduto";

import { PrismaClient, Produto } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { produto: string } }) {
	const produtos = await prisma.produto.findMany();
	console.log(produtos);
	return (
		<>
			<Filtros />
			{produtos?.map((e, i) => (
				<CardProduto key={i} title={e.title} tipo={params.produto} slug={e.slug} price={e.price} />
			))}
		</>
	);
}
