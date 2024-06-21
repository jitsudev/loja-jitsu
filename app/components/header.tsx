import Image from "next/image";
import Link from "next/link";
import SchemeToggle from "./schemetoggle";

export default function Header({ className }: any) {
	return (
		<header className={className}>
			<Link href="/">
				<Image src="/logo_header.png" width={180} height={72} alt="Logotipo da JITSU - Marca registrada"></Image>
			</Link>

			<nav className="flex justify-between items-center gap-5">
				<Link href="/auth/login">Login</Link>
				<Link href="/carrinho">Cart</Link>
				<SchemeToggle />
			</nav>
		</header>
	);
}
