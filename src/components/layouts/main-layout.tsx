import { Bell, HelpCircle, Home, Shield } from "lucide-react";
import { Outlet } from "react-router-dom";
import { ExpandableTabs } from "../ui/expandable-tabs";
import { ThemeProvider } from "../providers/theme-provider";

function MainLayout() {
  const tabs = [
    { title: "Dashboard", icon: Home, path: "/" },
    { title: "Notifications", icon: Bell, path: "/notif" },
    { title: "Support", icon: HelpCircle, path: "/support" },
    { title: "Security", icon: Shield, path: "/security" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative min-w-full overflow-x-hidden min-h-screen">
        <header className="sticky top-2 flex justify-center items-center py-3">
          <ExpandableTabs tabs={tabs} className="w-fit sticky" />
        </header>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default MainLayout;
