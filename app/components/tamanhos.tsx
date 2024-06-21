import { SIZE } from "../(util)/dimona";

export default function Tamanho() {
	return (
		<div className="flex gap-2 w-full">
			<div>Tamanho:</div>
			{Object.values(SIZE).map((v, i) => (
				<div key={i} className="flex gap-1">
					<input type="radio" name="color" value={v} />
					{v}
				</div>
			))}
		</div>
	);
}
