import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col w-full min-h-svh justify-center items-center">
			<div className="flex flex-col w-1/2 justify-center items-center gap-4 mb-20">
				<Image src="/logo_footer.png" width={180} height={80} alt="Logo Jitsu" />
				<h1>Bem-vindo ! Entre com suas credenciais.</h1>
				<form className="flex flex-col justify-center items-center gap-4">
					<input type="text" name="username" placeholder="username" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<input type="password" name="password" className="bg-transparent border-solid border-2 p-2 rounded-lg" />
					<button type="submit" className="flex justify-center items-center w-full p-2 bg-green-600 rounded-full">
						Entrar
					</button>
					<Link href="/auth/recuperasenha" className="text-sm text-slate-500 hover:text-slate-200">
						Esqueci a senha
					</Link>
				</form>
			</div>
			<div className="flex flex-col justify-center items-center gap-4">
				<h2>Ainda não é cliente ?</h2>
				<Link href="/auth/cadastro" className="flex justify-center items-center w-full p-2 bg-blue-800 rounded-full">
					Cadastrar-se
				</Link>
				<Link href="/" className="text-sm text-slate-500 hover:text-slate-200">
					Desejo comprar sem cadastro.
				</Link>
			</div>
		</div>
	);
}
