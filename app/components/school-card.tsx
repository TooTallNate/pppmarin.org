import Image, { ImageProps } from "next/image";

export function SchoolCard({
  href,
  image,
  name,
  street, city
}: {
  href: string;
  image: ImageProps['src'];
  name: string;
  street: string;
  city: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col w-72 border border-gray-200 rounded-lg shadow items-center bg-white m-2 p-2 hover:bg-blue-100 text-center transition-colors"
    >
      <Image src={image} alt={name} width={200} height={200} />
      <p>{name}</p>
      <p>
        {street}
        <br />
        {city}
      </p>
    </a>
  );
}
