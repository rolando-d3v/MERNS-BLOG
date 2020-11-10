import Link from "next/link";
import {
  FaIndent,
  FaOutdent,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";

const navList = [
  { icon: <FaPenSquare />, href: "/", menu: "Formulario" },
  { icon: <FaSearch />, href: "/home", menu: "Busqueda" },
  { icon: <FaTable />, href: "/", menu: "Tabla" },
];

const linksDerecho = [
  { icon: <FaIndent />, href: "/home", menu: "Perfil" },
  { icon: <FaSignOutAlt />, href: "/", menu: "Salir" },
];

export default function Nav() {
  return (
    <nav className="bg-blue-200">
      <ul className="flex justify-between px-4 py-4">
        {/* <!-- NAV IZQUIERDO -->  */}
        <ul className="flex items-center space-x-4">
          <Link href="/home">
            <a className="link-nav text-blue-600 font-bold text-lg no-underline">
              <img
                className="w-8 h-8 mx-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/600px-Mangekyou_Sharingan_Kakashi.svg.png"
                alt="logo"
              />
              Home
            </a>
          </Link>

          {navList.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>
                <a className="link-nav no-underline focus:text-red-600  hover:text-gray-600">
                  <span className="mr-1"> {nav.icon} </span>
                  {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* <!-- NAV DERECHO -->  */}
        <ul className=" flex-row justify-between space-x-4 items-center hidden md:flex ">
          {linksDerecho.map((nav, i) => (
            <li key={i} className='' >
              <Link href={nav.href}>
                <a className="link-nav border px-4 py-1 rounded-xl hover:border-blue-700 focus:bg-blue-600 focus:border-blue-900 focus:text-white" >
                  <span className="mr-1"> {nav.icon} </span>
                  {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
