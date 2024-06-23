"use client";

import { createContext, useContext, useState } from "react";

export type Item = {
	id: number;
	title: string;
	quantity: number;
	value: number;
};

export type Cart = {
	items: Array<Item>;
	total: number;
	addItem: (item: Item) => void;
	removeItem: (id: number) => void;
	clearCart: () => void;
};

export const defaultCart = {
	items: new Array<Item>(),
	total: 0,
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
};

const CartContext = createContext<Cart>(defaultCart);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [items, setItems] = useState<Array<Item>>([]);
	const [total, setTotal] = useState<number>(0);

	function addItem(item: Item) {
		setItems([...items, item]);
	}

	function removeItem(id: number) {
		var newItems = [...items];
		const index = newItems.findIndex((i: Item) => i.id == id);
		newItems.splice(index, 1);
		setItems(newItems);
	}

	function clearCart() {
		setItems([]);
	}

	return <CartContext.Provider value={{ items, total, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
