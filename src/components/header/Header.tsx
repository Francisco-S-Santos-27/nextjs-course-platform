"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex  items-center justify-center bg-primary p-4 ">
      <ul className="flex  gap-4 items-center">
        <li className="my-2">
          <Link className="border-2 rounded-md px-2 py-2 font-bold" href="/">
            {" "}
            CODARSE
          </Link>
        </li>

        <li>
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina Inicial
          </Link>
        </li>

        <li>
          <Link href="/cursos" data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"> Cursos</Link>
        </li>

        <li>
          <Link
            className="flex items-center gap-1"
            href="https://www.google.com.br/?hl=pt-BR"
            target="_blank"
          >
            {" "}
            Pesquisa
            <MdOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
