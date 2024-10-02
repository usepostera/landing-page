import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen w-full">
      <AppHeader />

      <main className="mt-[100px]">{children}</main>

      <AppFooter />
    </div>
  );
};

export default RootLayout;
