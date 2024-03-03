export function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl md:text-5xl lg:text-6xl px-10 text-center font-bold pb-4 md:pb-8 ${className}`}>
      {children}
    </h1>
  );
}
