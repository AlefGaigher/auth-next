'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation';

export default function Login(){
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    async function handleLogin(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"),
            password: formData.get('password')
        };

        signIn('credentials', {
            ...data,
            callbackUrl: '/dashboard'
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Entrar em sua conta</h2>
                
                {error === "CredentialsSignin" && (
                    <div className="text-red-600 mb-4 text-center">Credencial Inválida</div>
                )}

                <form className="space-y-4" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div>
                        <label htmlFor="email-address" className="sr-only">Digite seu email</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="input-field"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="input-field"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                                Lembrar de mim
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Entrar
                    </button>
                </form>

                <div className="mt-4 text-sm text-center">
                    Não tem uma conta?{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Cadastre-se
                    </a>
                </div>
            </div>
        </div>
    );
}
