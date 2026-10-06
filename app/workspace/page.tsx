export default function WorkspacePage() {
  return (
    <div className="grid min-h-[calc(100vh-73px)] grid-cols-[minmax(0,1fr)_20rem]">
      <section className="flex items-center justify-center border-r border-border p-8">
        <div className="max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Workspace
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">
            Your repository map starts here.
          </h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            The map, file details, and repository questions will appear in this
            shell as the later phases add them.
          </p>
        </div>
      </section>
      <aside className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Details
        </p>
        <p className="mt-3 text-sm text-muted">
          Select a file to see its real dependencies.
        </p>
      </aside>
    </div>
  );
}