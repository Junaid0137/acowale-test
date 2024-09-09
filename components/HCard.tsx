/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

function HCard({ id, title, desc, content, url, image, src }) {
    const Ncontent = content.replace(/\[\d+ chars\]/, "");
    return (
        <div>
            <Card key={id} className='flex flex-row pb-5'>
                <div className='w-1/2'>
                    <div className='space-y-4 pl-8'>
                        <div className='rounded-xl overflow-hidden relative -mb-3'>
                            <img src={image} className=' h-60 w-80 object-contain' alt='' />
                        </div>
                        <Link href={url}>
                            <CardTitle className='hover:underline'>{title}</CardTitle>
                        </Link>
                        <CardDescription >{desc}</CardDescription>
                    </div>
                </div>
                <div className='w-1/2 my-auto'>
                    <Link href={src.url}>
                        <CardDescription className='pl-[23px] pb-2'>{src.name}</CardDescription>
                    </Link>
                    <CardContent className='text-l'>{Ncontent}</CardContent>
                    <div className='flex justify-end pr-12'>
                        <Link href={url}>
                            <Button>More</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HCard
