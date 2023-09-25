import Link from "next/link";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
