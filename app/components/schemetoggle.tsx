"use client";
import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export default function SchemeToggle() {
	const [colorTheme, setTheme] = useDarkMode();

	return <div>{colorTheme === "light" ? <Sun size={15} onClick={() => setTheme("light")} /> : <Moon size={15} onClick={() => setTheme("dark")} />}</div>;
}
