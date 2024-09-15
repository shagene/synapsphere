import { FloatingNav } from "@/components/floating-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <FloatingNav />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}