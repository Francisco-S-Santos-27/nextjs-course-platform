import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary p-4">
      <div className="flex justify-center items-center gap-4">
        <p>
          Desenvolvido por 
          <Link href="https://www.google.com.br/?hl=pt-BR" target="_blank">
            <span  className="border-2 rounded-md p-1 " >CODARSE</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};
