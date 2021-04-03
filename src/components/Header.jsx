import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/aboutUs", name: "About Us" },
  { href: "/blog", name: "Blog" },
  { href: "/contact", name: "Contact" },
  { href: "/more", name: "More" },
];

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between bg-pink-400 flex-wrap bg-teal p-2">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Maggie Nail
        </span>
      </div>

      <div className="text-lg hidden md:flex justify-center">
        {navLinks.map((link, i) => (
          <Link {...link} key={i}>
            <a
              className={`font-bold text-lg p-2 mx-2  ${
                router.pathname === link.href
                  ? "text-white"
                  : "hover:text-gray-700"
              }`}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>

      {/* <button className="flex-none md:flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg
          className="h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button> */}
      <div className="flex" />
    </nav>
  );
};

export default Header;
