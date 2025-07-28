import  Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[url('/assets/background-login.png')] bg-cover bg-center flex items-center justify-center">
      <div className="w-full max-w-md">
        <img src="/assets/logo-app.png" alt="descrição" />

        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 flex items-center justify-center"
            >
              <p className="font-bold text-lg">E-mail</p>
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border-5 border-black-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 font-bold flex items-center justify-center"
            >
              <p className="font-bold text-lg">Senha</p>
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border-5 border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
            Ainda não tem uma conta?{" "}
            <Link href="/login/register">
                <span className="text-blue-600 hover:underline">Cadastre-se</span>
            </Link>
        </p>
      </div>
    </div>
  );
}
