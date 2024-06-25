"use client";
import { Trash2 } from "lucide-react";
import Frete from "../../components/frete";
import { useCart, Item } from "../../context/cartContext";
import Image from "next/image";
import Quantity from "@/app/components/quantity";

export default function Page() {
	const { items, total, removeItem } = useCart();
	return (
		<div className="flex gap-20 w-full justify-between">
			<div className="flex flex-col gap-4 w-2/3">
				<h1>Meus ítems</h1>
				{items?.length > 0 ? (
					<div className="flex flex-col gap-4">
						{items.map((item: Item, i: number) => (
							<div key={i} className="flex justify-between items-center gap-3 bg-gray-900">
								<Image src="/mockup.png" width={80} height={80} alt={item.title} className="rounded" />
								<div>{item.title}</div>
								<Quantity initialValue={item.quantity.toString()} onInputValueChange={() => null} />
								<div>{item.value}</div>
								<button onClick={() => removeItem(item.id)} className="flex justify-center items-center rounded-full bg-red-700 p-2 mr-10">
									<Trash2 size={14} />
								</button>
							</div>
						))}
					</div>
				) : (
					<div>Carrinho vazio </div>
				)}
				<div className="flex justify-between w-full mt-10">
					<Frete />
				</div>
			</div>
			<div className="flex flex-col gap-4 w-1/3 items-center ">
				<h1>Detalhes da compra</h1>
				<div className="w-full">
					<div>Subtotal:{total}</div>
					<div>Envio: R$ 24.90</div>
					<div>Total:</div>
				</div>
			</div>
		</div>
	);
}
