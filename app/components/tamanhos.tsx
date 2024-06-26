"use client";

import { SIZE } from "../(util)/dimona";

type sizeType = {
	a: number;
	b: number;
	c: number;
};

export default function Tamanho({ onInputValueChange }: { onInputValueChange: (value: string) => void }) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		onInputValueChange(value);
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				Tamanho:
				{Object.keys(SIZE).map((v, i) => (
					<div key={i} className="flex gap-1">
						<input type="radio" name="size" value={v} onChange={handleChange} />
						{v}
					</div>
				))}
			</div>
		</div>
	);
}
