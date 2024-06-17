"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const path = usePathname();
  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="/loginPage"
            className={path.startsWith("/loginPage") ? "active" : null}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/bitcoinRate"
            className={path.startsWith("/bitcoinRate") ? "active" : null}
          >
            Bitcoin Rates
          </Link>
        </li>
      </ul>{" "}
    </nav>
  );
}
