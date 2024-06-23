"use client";
import { useProduct } from "../context/productContext";
import { SIZE } from "../(util)/dimona";

type sizeType = {
	a: number;
	b: number;
	c: number;
};

export default function Tamanho() {
	const { item, handleProduto } = useProduct();

	function setSize(size: string) {
		handleProduto({ ...item, size });
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				Tamanho:
				{Object.keys(SIZE).map((v, i) => (
					<div key={i} className="flex gap-1">
						<input type="radio" name="size" value={v} onClick={() => setSize(v)} />
						{v}
					</div>
				))}
			</div>
		</div>
	);
}
