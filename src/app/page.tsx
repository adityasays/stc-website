import Header from "@/components/global/Header";
import About from "@/components/home/About";
import AboveTheFold from "@/components/home/AboveTheFold";
import Stats from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Header />
      <AboveTheFold />
      <Stats />
      <About />
    </>
  );
}
