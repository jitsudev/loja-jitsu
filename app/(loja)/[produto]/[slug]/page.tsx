"use client";

import { ProdutoProvider, useProduct } from "@/app/context/productContext";
import { useCart } from "@/app/context/cartContext";
import Colors from "@/app/components/colors";
import Quantity from "@/app/components/quantity";
import Tamanhos from "@/app/components/tamanhos";
import Image from "next/image";

export default function Page() {
	const { addItem } = useCart();
	const { item } = useProduct();

	function handleAddToCart() {
		addItem({
			id: 1,
			title: "teste",
			value: item.value,
			quantity: item.quantity,
		});
	}
	return (
		<ProdutoProvider>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 w-full">
					<div className="w-2/4">
						<div>
							<Image src="/mockup.png" width={400} height={400} alt="titulo do produto" />
						</div>
					</div>
					<div className="flex flex-col w-2/4 gap-4">
						<h1 className="text-4xl font-bold">Camisa armlock voador</h1>
						<h2 className="flex gap-2 text-2xl flex-wrap w-full">
							<span className="text-gray-800 line-through ">R$ 76,00</span>
							<span className="text-gray-400 font-bold">R$ 66,00</span>
							<span className="text-gray-400 text-sm">ou 3 x 22,00 sem juros</span>
						</h2>

						<Colors title="Cor:" />
						<Tamanhos />
						<Quantity title="Quantidade:" />

						<div>
							<h2>Descrição:</h2>
							<p>Composição: 100% algodão, meia malha penteada, costura reforçada, gola em ribana, 165g, fio 30.1.</p>
						</div>
						<div>
							{item.color} - {item.size} - {item.quantity}
						</div>
						<div className="flex gap-2">
							<button className="text-lg text-black p-2 flex items-center justify-center w-2/3 rounded-full bg-slate-200 hover:bg-white" onClick={() => handleAddToCart()}>
								Adicionar ao carrinho
							</button>
							<button className="text-lg text-black p-2 flex items-center justify-center w-1/3 rounded-full bg-green-400 hover:bg-green-300">Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</ProdutoProvider>
	);
}
