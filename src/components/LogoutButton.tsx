'use client'

import { signOut } from "next-auth/react";

export default function LogoutButtton(){
    return(
        <button
        onClick={() => signOut()}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    );
}