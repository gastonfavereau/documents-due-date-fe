'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children,}) {
  const pathName = usePathname()
  return (
  <div className="ly-client-div-main">
    <div className="ly-client">
        { pathName }
        <hr/>
        <Link href="">Este es navbar de los clientes</Link>
      </div>
    {children}
  </div>
  );
}
