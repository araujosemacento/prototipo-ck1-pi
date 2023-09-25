"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Loading from "../components/Loading.jsx";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  return (
    <main className="flex p-4 h-[100%]">
      {loading ? (
        <Loading />
      ) : !user ? (
        <h1 className="flex h-24 m-auto text-4xl font-bold">
          Conecte-se com o Github para acessar seu perfil.
        </h1>
      ) : (
        <h1 className="flex h-24 m-auto text-7xl font-bold">
          Bem vindo,<span id="rainbow"> &#32; {user.displayName}</span>.
        </h1>
      )}
    </main>
  );
};

export default page;
