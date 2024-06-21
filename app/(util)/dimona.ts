type colorType = {
	[key: string]: string;
};
export const COLOR: colorType = {
	Branco: "bg-[#ffffff]",
	Preto: "bg-[#000000]",
	"Azul Marinho": "bg-[#000066]",
	Laranja: "bg-[#ff8200]",
	"Verde Bandeira": "bg-[#228800]",
	Vermelho: "bg-[#cc0000]",
	"Amarelo Canário": "bg-[#ffcc00]",
	"Rosa Pink": "bg-[#ff00b1]",
	Vinho: "bg-[#46000b]",
	"Cinza Mescla": "bg-[#999999]",
};

type sizeType = {
	[key: string]: { a: number; b: number; c: number };
};

export const SIZE: sizeType = {
	P: { a: 10, b: 11, c: 12 },
	M: { a: 20, b: 21, c: 22 },
	G: { a: 0, b: 0, c: 0 },
	GG: { a: 0, b: 0, c: 0 },
	XGG: { a: 0, b: 0, c: 0 },
	G1: { a: 0, b: 0, c: 0 },
	G2: { a: 0, b: 0, c: 0 },
	G3: { a: 0, b: 0, c: 0 },
	G4: { a: 0, b: 0, c: 0 },
};
