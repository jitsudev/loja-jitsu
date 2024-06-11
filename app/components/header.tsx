import Image from "next/image";
import Link from "next/link";

export default function Header({ className }: any) {
  return (
    <header className={className}>
      <Link href="/">
        <Image
          src="/logo-header.png"
          width={180}
          height={72}
          alt="Logotipo da JITSU - Marca registrada"
        ></Image>
      </Link>
      <div className="flex items-center gap-3 mb-3 w-2/6">
        <input
          name="search"
          className="border-solid border-2 rounded-md bg-transparent p-2 text-xs w-full"
          placeholder="Ex. Camisa arm-lock"
        />
        <button type="submit">Buscar</button>
      </div>
      <nav className="flex gap-5">
        <Link href="/login">Login</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}
