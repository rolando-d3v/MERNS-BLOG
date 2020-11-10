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
  { icon: <FaTable />, href: "/tabla", menu: "Tabla" },
  
];

const linksDerecho = [
  { icon: <FaIndent />, href: "/tabla", menu: "Tabla" },
  { icon: <FaSignOutAlt />, href: "/login", menu: "salir" },
];

export default function Nav() {
  return (
    <nav className="bg-blue-200">
      <ul className="flex justify-between px-6 py-4">
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center">
            <img
              className="w-8 h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/600px-Mangekyou_Sharingan_Kakashi.svg.png"
              alt="logo"
            />
            <Link href="/home">
              <a className="text-blue-600 font-bold text-lg no-underline pl-2">
                Home
              </a>
            </Link>
          </li>
          {navList.map((nav, i) => (
            <li key={i}>
              <Link href={nav.href}>
                <a className="no-underline flex items-center">
                  <span className="mr-1"> {nav.icon} </span>
                  {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* NAV DERECHO */}
        <ul className="flex justify-between space-x-4 items-center">
          {linksDerecho.map(( nav, i ) => (
            <li key={i}>
              <Link href={nav.href} className="btn-blue no-underline">
                <a className="no-underline flex items-center">
                  <span className="mr-1"> {nav.icon} </span>
                  {nav.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>

    // <nav className="bg-blue-200">
    //   <ul className="flex justify-between items-center px-6 py-4">
    //     <ul className="flex space-x-4">
    //       <li className="flex">
    //         <img
    //           className="w-8"
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/600px-Mangekyou_Sharingan_Kakashi.svg.png"
    //           alt="logo"
    //         />
    //         <Link href="/home">
    //           <a className="text-blue-600 font-bold text-lg no-underline pl-2">Home</a>
    //         </Link>
    //       </li>
    //       {links.map(({ href, label }) => (
    //         <li key={`${href}${label}`}>
    //           <Link href={href} className="btn-blue no-underline">
    //             {label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //     {/* NAV DERECHO */}
    //     <ul className="flex justify-between space-x-4">
    //       {links.map(({ href, label }) => (
    //         <li key={`${href}${label}`}>
    //           <Link href={href} className="btn-blue no-underline">
    //             {label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </ul>
    // </nav>
  );
}
