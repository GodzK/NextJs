import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals/">Meals</Link></p>
      <p><Link href="/meals/share">Share meal  </Link></p>
      <p><Link href="/community">Community</Link></p>
      <p><Link href="./meals/this-1">Click1</Link></p>
      <p><Link href="./meals/this-2">Click2</Link></p>
    </main>
  );
}
