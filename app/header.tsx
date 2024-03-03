import Image from "next/image";

import ppcns from '@/public/ppcns.png';
import playisenough from '@/public/playisenough.png';
import { Menu } from "@/app/components/menu";

export function Header () {
    return (
      <header className="flex flex-col justify-between w-full">
        <div className="bg-slate-800 text-white w-full text-center py-2 md:py-1 flex items-center justify-center px-3">
          <Image
            src={playisenough}
            alt="Play is Enough"
            className="inline pr-3"
            height={52}
          />
          <a
            href="https://ccppns.org/convention-info#/conventionplayisenough2024/"
            target="_blank"
            className="hover:underline flex-shrink"
          >
            Marin is hosting the{" "}
            <span className="font-bold">Play is Enough</span> Convention 2024.
            Join us!
          </a>
        </div>
        <div className="flex justify-between items-center p-2 md:p-4">
          <div className="flex items-center">
            <Image src={ppcns} alt="PPCNS" height={75} />
            <h2 className="pl-2 md:pl-3 text-sm md:text-lg w-40 md:w-72 font-medium">
              Marin County Council of Parent Participation Nursery Schools
            </h2>
          </div>
          <Menu />
        </div>
      </header>
    );
}