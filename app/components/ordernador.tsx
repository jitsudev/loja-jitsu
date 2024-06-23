export default function Ordenador({ title }: { title?: string }) {
	const options = ["Lançamentos", "Menor Preço", "Maior Preço"];
	return (
		<div className="flex gap-2 items-center">
			{title != "" ? <span>{title}</span> : null}
			<select className="bg-transparent border-gray-500 border-solid border-2 px-2 rounded-md appearance-auto">
				{options.map((o, i) => (
					<option key={i}>{o}</option>
				))}
			</select>
		</div>
	);
}
