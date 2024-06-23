"use client";

import { SetStateAction, createContext, useContext, useState } from "react";

export type Item = {
	id: number;
	title: string;
	color: string;
	size: string;
	value: number;
	quantity: number;
};

export type Produto = {
	item: Item;
	handleProduto: (item: Item) => void;
};

const defaultItem = {
	id: 0,
	title: "",
	color: "",
	size: "",
	value: 0,
	quantity: 0,
};

export const defaultProduto = {
	item: defaultItem,
	handleProduto: (item: Item) => {},
};

const ProdutoContext = createContext<Produto>(defaultProduto);

export const ProdutoProvider = ({ children }: { children: React.ReactNode }) => {
	const [item, setItem] = useState(defaultItem);

	function handleProduto(item: Item) {
		setItem(item);
	}

	return <ProdutoContext.Provider value={{ item, handleProduto }}>{children}</ProdutoContext.Provider>;
};

export const useProduct = () => useContext(ProdutoContext);
