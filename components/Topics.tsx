
import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import TopicCard from './TopicCard'
import { ChevronRightIcon } from '@radix-ui/react-icons';
function Topics({ sdata, tdata, edata, ndata }) {

    return (
        <div className='h-screen mt-20 pb-20'>

            <div className='flex flex-row'>
                <h1 className='text-4xl mx-5 md:mx-0 font-bold mb-7 md:mb-10 mr-4'>Topics</h1>
                <div className='my-2 font-bold'>
                    <ChevronRightIcon className='h-8 w-8' />
                </div>
            </div>
            <div className='grid grid-cols-1 mx-4 md:mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                <Card>
                    <CardHeader>
                        <CardTitle>Sports</CardTitle>
                    </CardHeader>
                    {sdata.articles?.map((item, i) => (
                        <TopicCard key={i} title={item.title} image={item.image} src={item.source} pubAt={item.publishedAt} url={item.url} />
                    ))}
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Entertainment</CardTitle>
                    </CardHeader>
                    {edata.articles?.map((item, i) => (
                        <TopicCard key={i} title={item.title} image={item.image} src={item.source} pubAt={item.publishedAt} url={item.url} />
                    ))}
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Technology</CardTitle>
                    </CardHeader>
                    {tdata.articles?.map((item, i) => (
                        <TopicCard key={i} title={item.title} url={item.url} image={item.image} src={item.source} pubAt={item.publishedAt} />
                    ))}
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Science</CardTitle>
                    </CardHeader>
                    {ndata.articles?.map((item, i) => (
                        <TopicCard key={i} title={item.title} url={item.url} image={item.image} src={item.source} pubAt={item.publishedAt} />
                    ))}
                </Card>
            </div>
        </div>
    )
}

export default Topics
