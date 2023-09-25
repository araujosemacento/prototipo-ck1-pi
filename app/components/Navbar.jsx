import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, signInWithGithub, signOutUser } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await signInWithGithub();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  return (
    <div>
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>

        {!user ? null : (
          <li>
            <Link href="/perfil">Perfil</Link>
          </li>
        )}
      </ul>

      {!user ? (
        <ul>
          <li onClick={handleSignIn}>Login</li>
        </ul>
      ) : (
        <ul>
          <li onClick={handleSignOut}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
