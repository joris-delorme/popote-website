import Link from "next/link";
import NewsletterForm from "./components/newsletter-form";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="h-[100svh] w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="font-black text-3xl opacity-15">Popote</h1>
      <Link href="/recipes" className={buttonVariants()}>Découvrir les recettes</Link>
    </main>
  );
}
