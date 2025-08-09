import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <DashboardHeader />
          <main className="space-y-6 p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
