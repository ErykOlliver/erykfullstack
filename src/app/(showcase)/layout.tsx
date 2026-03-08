import NavBar from "@/src/shared/ui-kit/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}