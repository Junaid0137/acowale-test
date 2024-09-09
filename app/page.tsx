// import InfoCards from "@/components/InfoCards";
import Highlights from "@/components/Highlights";
import FData from "@/lib/FData";
export default function Home() {
  return (
    <main>
      <section className="mb-20">
        <FData />
      </section>
      <section className="mt-20">
        <Highlights />
      </section>
    </main>
  );
}
