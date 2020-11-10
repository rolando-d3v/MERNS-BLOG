import Link from "next/link";

const links = [
  { href: "/home", label: "GitHub" },
  { href: "/", label: "Docs" },
];

export default function Nav() {
  return (
    <nav className="bg-blue-200">
      <ul className="flex justify-between items-center px-6 py-4">
        <ul className="flex space-x-4">
          <li className="flex">
            <img
              className="w-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/600px-Mangekyou_Sharingan_Kakashi.svg.png"
              alt="logo"
            />
            <Link href="/home">
              <a className="text-blue-600 font-bold text-lg no-underline pl-2">Home</a>
            </Link>
          </li>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href} className="btn-blue no-underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* NAV DERECHO */}
        <ul className="flex justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href} className="btn-blue no-underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
