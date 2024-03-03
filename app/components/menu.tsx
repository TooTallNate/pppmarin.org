import Link, { LinkProps } from "next/link";

export function Menu() {
    return (
      <div className="flex gap-4">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/our-schools">Our Schools</MenuLink>
        <MenuLink href="/convention-2024">Convention 2024</MenuLink>
      </div>
    );
}

function MenuLink(props: React.PropsWithChildren<LinkProps>) {
    return <Link className="hover:underline font-medium text-slate-800" {...props} />
}