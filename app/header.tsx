import Image from "next/image";

import playisenough from '@/public/playisenough.png';

export function Header () {
    return (
      <header className="flex flex-col justify-between w-full">
        <div className="bg-slate-800 text-white w-full text-center py-1 flex items-center justify-center px-3">
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
        <h2>Marin County Council of Parent Participation Nursery Schools</h2>
      </header>
    );
}