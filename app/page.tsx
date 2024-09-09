// import InfoCards from "@/components/InfoCards";
import FData from "@/lib/FData";
import { getCategory } from "@/lib/getApi";

export default async function Home() {
  const data = await getCategory('general');
  console.log(data.articles[0].source.url)
  return (
    <main>
      {/* <section className="grid grid-cols-3 mx-5 md:mx-auto md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5 mb-20">
        {data.articles.map((item, i) => (
          <InfoCards key={i} id={i} title={item.title} desc={item.description} content={item.content} url={item.url} image={item.image} />
        ))}
      </section> */}
      <section>
        <FData />
      </section>
    </main>
  );
}
