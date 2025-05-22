import Link from 'next/link';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <Link href="/">Home</Link> 
      <Link href="/about">About</Link> 
      <Link href="/products">Products</Link> 
      <Link href="/cart">Cart</Link>
    </nav>
  );
}
