import Link from "next/link";
export function Button({href, children}:{href:string; children:React.ReactNode}) {
  return <Link className="btn-primary" href={href}>{children}</Link>;
}