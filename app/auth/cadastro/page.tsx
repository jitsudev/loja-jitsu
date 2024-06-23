import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col w-full min-h-svh justify-center items-center">
			<div className="flex flex-col w-1/2 justify-center items-center gap-4 mb-20">
				<Image src="/logo_footer.png" width={180} height={80} alt="Logo Jitsu" />
				<h1>Cadastro</h1>
				<form className="flex flex-col gap-4">
					<input type="text" name="username" placeholder="username" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<input type="text" name="nome" placeholder="Nome" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<input type="email" name="email" placeholder="E-mail" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<input type="password" name="password" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<input type="password" name="password-confirmation" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<button type="submit" className="flex justify-center items-center w-full p-2 bg-green-600 rounded-full">
						Cadastrar
					</button>
				</form>
			</div>
			<div className="flex flex-col justify-center items-center gap-4">
				<h2>Já possui conta ?</h2>
				<Link href="/auth/login" className="flex justify-center items-center w-full p-2 bg-blue-800 rounded-full">
					Login
				</Link>
				<Link href="/" className="text-sm text-slate-500 hover:text-slate-200">
					Desejo comprar sem cadastro.
				</Link>
			</div>
		</div>
	);
}
