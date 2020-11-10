import React from "react";
import Link from "next/link";
// import { NavItem, Nav } from "react-bootstrap";
import {
  FaIndent,
  FaOutdent,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";
import "./sidebar.scss";

const navList = [
  { icon: <FaPenSquare />, href: "/preguntas", menu: "Formulario" },
  { icon: <FaSearch />, href: "/buscar", menu: "Busqueda" },
  { icon: <FaTable />, href: "/tabla", menu: "Tabla" },
  { icon: <FaSignOutAlt />, href: "/login", menu: "salir" },
];

const SidebarComponent = (props) => {
  return (
    <div className={`sidebar ${props.toggleState ? "sidebar-visible" : ""}`}>
      <div className="tooglex">
        {props.toggleState ? (
          <FaOutdent className="sidebar__close" onClick={props.toggle} />
        ) : (
          <FaIndent className="sidebar__close" onClick={props.toggle} />
        )}
      </div>

      {props.toggleState ? (
        <div className="sidebar__menu  ">
          <ul className="list-unstyled">
            {navList.map((nav, i) => (
              <li key={i}>
                <Link href={nav.href}>
                  <a>
                    <span className="mr-3">{nav.icon}</span> {nav.menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="sidebarol">
          <div className="list-rol">
            <Link className="nav-link" href="/preguntas">
              <FaPenSquare />
            </Link>
            <Link className="nav-link" href="/buscar">
              <FaSearch />
            </Link>
            <Link className="nav-link" href="/tabla">
              <FaTable />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
