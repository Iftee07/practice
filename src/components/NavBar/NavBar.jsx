import { IoMenu } from "react-icons/io5";
import Link from "../Link/Link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="bg-blue-400 text-black p-3">
      {/* Mobile menu */}
      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoMdClose className="text-3xl"></IoMdClose>
        ) : (
          <IoMenu className="text-3xl"></IoMenu>
        )}
        <div>
          <ul
            className={`absolute bg-blue-400 duration-500 text-black ${open === true ? "top-13" : "-top-60"}`}
          >
            {routes.map((route) => (
              <Link route={route}></Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Dekstop menu */}
      <div>
        <ul className="hidden lg:flex justify-center gap-x-20 bg-blue-400 text-black">
          {routes.map((route) => (
            <Link route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
