/* eslint-disable @typescript-eslint/no-unused-vars */
import HCard from '@/components/HCard';
import InfoCards from '@/components/InfoCards';
import { getCategory } from '@/lib/getApi';
import React from 'react'
import * as motion from "framer-motion/client"
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
type Props = {
    params: {
        term: string,
    }
}
async function Categorypage({ params: { term } }: Props) {
    const data = await getCategory(term);
    return (
        <>
            <div className='block md:hidden'>
                <motion.div
                    className='max-w-3xl mx-auto mt-20'
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    whileInView={{ opacity: [0.1, 0.3, 0.5, 0.7, 1], y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className='text-5xl font-bold mx-4'>{term}</h1>
                    <div className="grid grid-cols-1 gap-3 mt-5 max-w-3xl mx-3">
                        {data.articles?.map((item, i) => (
                            <InfoCards key={i} id={i} title={item.title} desc={item.description} content={item.content} url={item.url} image={item.image} />
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className='hidden md:block'>
                <motion.div
                    className='max-w-3xl mx-auto mt-20'
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    whileInView={{ opacity: [0.1, 0.3, 0.5, 0.7, 1], y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className='text-5xl font-bold mx-4 md:mx-0'>{term}</h1>
                    <div className="grid grid-cols-1 gap-3 mt-5 max-w-3xl mx-auto">
                        {data.articles?.map((item, i) => (
                            <HCard key={i} id={i} title={item.title} desc={item.description} content={item.content} url={item.url} image={item.image} src={item.source} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Categorypage
