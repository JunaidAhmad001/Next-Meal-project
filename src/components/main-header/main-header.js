
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import MainHeaderBack from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {

  return (
    <>
      <MainHeaderBack />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
            <NavLink href="/meals"> meals</NavLink>
            </li>
            <li>
            <NavLink href="/community"> Food Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
