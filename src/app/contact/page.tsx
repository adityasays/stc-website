import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold px-4 pt-4">Contact STC</h1>
      <p className="px-5 pb-4 text-neutral-400">fill out the form below:</p>
      <div className="p-4 max-w-lg"><ContactForm /></div>
    </main>
  );
}