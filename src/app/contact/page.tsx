import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-4">Contact STC</h1>
      <p className="text-neutral-500 text-center mb-6">Please fill out the form below to reach us:</p>
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8">
        
        <div className="md:w-1/2 w-full p-4">
          <ContactForm />
        </div>
        
        <div className="md:w-1/2 w-full flex justify-center md:justify-start p-4">
          <img 
            src="/contactt.png" 
            alt="Cutout Image" 
            className="rounded-lg w-full h-auto" 
            style={{ 
              maxWidth: "315px",  
              height: "auto", 
              marginTop: "-70px", 
              marginLeft: "170px", 
            }} 
          />
        </div>
      </div>
    </main>
  );
}
