import InfoCards from '@/components/InfoCards';
import { getSearchData } from '@/lib/getApi';
import React from 'react'
type Props = {
    params: {
        term: string,
    }
}
async function Searchpage({ params: { term } }: Props) {
    const ts = decodeURI(term);
    const data = await getSearchData(ts);
    const Nterm = term.replace(/[^a-zA-Z]/g, ' ');
    return (
        <main>
            <div>
                <h1 className='text-4xl mx-5 md:mx-0 font-bold mb-7 md:mb-10 mr-4'>Results for {Nterm}...</h1>
            </div>
            <div className="grid grid-cols-1 mx-3 md:mx-auto md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
                {data.articles?.map((item, i) => (
                    <InfoCards key={i} id={i} title={item.title} desc={item.description} content={item.content} url={item.url} image={item.image} src={item.source} />
                ))}
            </div>
        </main>
    )
}

export default Searchpage
