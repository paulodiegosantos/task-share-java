import  Link from 'next/link';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[url('/assets/background-login.png')] bg-cover bg-center flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border-5 border-black-900 p-9">
        <h1 className='text-7xl font-medium p-5 text-center text-white'>Menu</h1>

        <div className="flex flex-col space-y-4">
            <button className="w-full px-4 py-2 border-5 border-black-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                Atividades
            </button>

            <button className="w-full px-4 py-2 border-5 border-black-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sair
            </button>
        </div>
      </div>
    </div>
  );
}
