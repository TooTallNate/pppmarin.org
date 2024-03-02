export function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-6xl px-10 text-center font-bold p-8 ${className}`}>
      {children}
    </h1>
  );
}
