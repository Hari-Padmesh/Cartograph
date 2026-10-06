import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 text-zinc-950">
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4">
        <span className="font-mono text-sm font-semibold tracking-tight">
          cartograph
        </span>
        <nav className="flex items-center gap-3 text-sm">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-md px-3 py-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-md bg-zinc-950 px-3 py-2 font-medium text-white hover:bg-zinc-700">
                Sign up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            See the shape of your code
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Understand any codebase at a glance.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Cartograph maps the real dependencies in a public repository so
            you can see what each file is, what it imports, and what depends on
            it.
          </p>
          <div className="mt-9">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <button className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-700">
                  Create your account
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <Link
                className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-700"
                href="/workspace"
              >
                Open workspace
              </Link>
            </Show>
          </div>
        </div>
      </main>
    </div>
  );
}
