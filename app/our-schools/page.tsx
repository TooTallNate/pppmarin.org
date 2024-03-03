import { Heading } from "@/app/components/heading";
import { SchoolCard } from "@/app/components/school-card";

import cccmarin from '@/public/cccmarin.png';
import millvalleynurseryschool from '@/public/millvalleynurseryschool.png';
import npnurseryschool from '@/public/npnurseryschool.webp';
import sananselmocoop from '@/public/sananselmocoop.png';
import twincitiescoop from '@/public/twincitiescoop.png';

export default function OurSchools() {
    return (
      <main className="flex flex-col items-center justify-between p-12 max-w-5xl text-center">
        <Heading>Our Schools</Heading>
        <p>
          There are currently five schools that are members of the Marin County
          Council of Parent Participation Nursery Schools.
        </p>
        <p className="pt-2">You may view their locations on the map below:</p>
        <div className="w-full h-[480px] overflow-hidden relative m-6">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=10c97h-UNnrheJjxvA8ccL5uzG1FOT54&ehbc=2E312F&z=10"
            width="100%"
            height="550"
            className="absolute top-[-70px]"
          ></iframe>
        </div>
        <div className="flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 justify-center">
          <SchoolCard
            image={cccmarin}
            href="https://www.cccmarin.org"
            name="Children's Cottage Co-Op"
            street="2900 Larkspur Landing Circlie"
            city="Larkspur, CA 94939"
          />
          <SchoolCard
            image={millvalleynurseryschool}
            href="https://www.millvalleynurseryschool.org"
            name="Mill Valley Nursery School"
            street="51 Shell Road"
            city="Mill Valley, CA 94941"
          />
          <SchoolCard
            image={npnurseryschool}
            href="https://www.npnurseryschool.org"
            name="Novato Parents Nursery School"
            street="1473 S Novato Blvd"
            city="Novato, CA 94947"
          />
          <SchoolCard
            image={sananselmocoop}
            href="https://www.sananselmocoop.org"
            name="San Anselmo Cooperative Nursery School"
            street="24 Myrtle Lane"
            city="San Anselmo, CA 94960"
          />
          <SchoolCard
            image={twincitiescoop}
            href="https://www.twincitiescoop.org"
            name="Twin Cities Community Preschool"
            street="56 Mohawk Ave"
            city="Corte Madera, CA 94925"
          />
        </div>
      </main>
    );
  }