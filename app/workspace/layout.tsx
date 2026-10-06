import { auth } from "@clerk/nextjs/server";
import { OrganizationBootstrap } from "@/app/components/organization-bootstrap";
import { ThemeControl } from "@/app/components/theme-control";

export default async function WorkspaceLayout({
  children,
}: LayoutProps<"/workspace">) {
  const { orgId, orgSlug } = await auth();
  const organization = orgSlug ?? orgId;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex items-center justify-between border-b border-border px-5 py-3">
        <div>
          <p className="font-mono text-sm font-semibold tracking-tight">
            cartograph
          </p>
          <p className="font-mono text-xs text-muted">
            {organization ?? "Choose an organization"}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <ThemeControl />
          <OrganizationBootstrap />
        </div>
      </header>
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
    </div>
  );
}