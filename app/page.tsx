import NewsletterForm from "./components/newsletter-form";

export default function Home() {

  return (
    <main className="h-[100svh] w-full flex flex-col items-center justify-center">
      <h1 className="font-black text-3xl opacity-15">Popote</h1>
      <NewsletterForm />
    </main>
  );
}
