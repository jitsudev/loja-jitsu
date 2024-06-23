import Image from "next/image";
import Link from "next/link";

export default function CardProduto({ title, tipo, slug, price }: { title: string; tipo: string; slug: string; price: string }) {
	return (
		<div className="flex flex-col w-1/6 items-center justify-center">
			<Link
				href={{
					pathname: `${tipo}/${slug}`,
					query: {},
				}}>
				<Image src="/mockup.png" width={300} height={450} alt="Imagem da camisa {titulo}"></Image>
			</Link>
			<h1>{title}</h1>
			<h2>
				De: R$ {price} por R$ {price}
			</h2>
		</div>
	);
}
