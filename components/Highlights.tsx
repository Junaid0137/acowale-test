import { ChevronRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import HighlightCard from './HighlightCard'
import { getMaxCategory } from '@/lib/getApi';

async function Highlights() {
    const sdata = await getMaxCategory('general');
    const hdata = await getMaxCategory('sports');
    return (
        <div className='mt-14'>
            <div className='flex flex-row'>
                <h1 className='text-4xl mx-5 md:mx-0 font-bold mb-7 md:mb-10 mr-4'>Top Headlines</h1>
                <div className='my-2 font-bold'>
                    <ChevronRightIcon className='h-8 w-8' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-4 md:mx-0'>
                <Card className='bg-transparent border-none' >
                    {sdata?.articles?.map((item, i) => (
                        <HighlightCard key={i} title={item.title} src={item.source} pubAt={item.publishedAt} url={item.url} desc={item.description} />
                    ))}
                </Card>
                <Card className='bg-transparent border-none' >
                    <CardHeader>
                        <CardTitle>Health</CardTitle>
                    </CardHeader>
                    {hdata?.articles?.map((item, i) => (
                        <HighlightCard key={i} title={item.title} src={item.source} pubAt={item.publishedAt} url={item.url} desc={item.description} />
                    ))}
                </Card>
            </div>
        </div>
    )
}

export default Highlights
