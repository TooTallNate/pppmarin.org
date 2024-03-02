import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-600 p-4 w-full">
      © 2024{" "}
      <Link href="/" className="hover:underline">
        Marin County Council of Parent Participation Nursery Schools
      </Link>
    </footer>
  );
}
