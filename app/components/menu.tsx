import Link, { LinkProps } from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Menu() {
  return (
    <div>
      <div className="md:hidden cursor-pointer border rounded-md border-slate-300 w-8 h-8 flex justify-center items-center p-1 mr-4">
        <HamburgerMenuIcon className="fill-slate-700" />
      </div>
      <span className="hidden md:flex gap-4">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/our-schools">Our Schools</MenuLink>
        <MenuLink href="/convention-2024">Convention 2024</MenuLink>
      </span>
    </div>
  );
}

function MenuLink(props: React.PropsWithChildren<LinkProps>) {
  return (
    <Link className="hover:underline font-medium text-slate-800" {...props} />
  );
}