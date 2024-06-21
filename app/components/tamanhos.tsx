"use client";
import { SetStateAction, useState, Dispatch } from "react";
import { SIZE } from "../(util)/dimona";

type sizeType = {
	a: number;
	b: number;
	c: number;
};

export default function Tamanho() {
	const [selectedSize, setSize]: [sizeType, Dispatch<sizeType>] = useState({} as sizeType);
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				Tamanho:
				{Object.keys(SIZE).map((v, i) => (
					<div key={i} className="flex gap-1">
						<input type="radio" name="color" value={v} onClick={() => setSize(SIZE[v] as sizeType)} />
						{v}
					</div>
				))}
			</div>

			{selectedSize.a ? (
				<div className="flex gap-3">
					<span>Largura: {selectedSize.a}cm</span>
					<span>Comprimento:{selectedSize.b}cm</span>
					<span>Gola: {selectedSize.c}cm</span>
				</div>
			) : null}
		</div>
	);
}
