import LogoutButtton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard () {

    const session = await getServerSession();

    if(!session){
        redirect("/");
    }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-800">Bem vindo ao seu Dashboard</h1>
              <p className="text-gray-500 mt-2">Veja o que está acontecendo com sua conta hoje.</p>
              <div className="mt-6">
                <div className="bg-white shadow-md rounded-lg px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Informação de Usuário</h3>
                      <p className="mt-1 text-sm text-gray-500">Nome: {session?.user?.name}</p>
                      <p className="mt-1 text-sm text-gray-500">Email: {session?.user?.email}</p>
                    </div>
                   <LogoutButtton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


