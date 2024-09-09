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
                    <div className='space-y-4'>
                        <div className='rounded-xl overflow-hidden relative -mb-3 h-50 w-80 m-5 mb-2'>
                            <img src={image} className='h-full w-full object-cover' alt='' />
                        </div>
                        <div className='m-5 ml-6 space-y-2'>
                            <Link href={url}>
                                <CardTitle className='hover:underline'>{title}</CardTitle>
                            </Link>
                            <CardDescription >{desc}</CardDescription>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 my-auto'>
                    <Link href={src.url}>
                        <CardDescription className='pl-[23px] pb-2'>{src.name}</CardDescription>
                    </Link>
                    <CardContent className='text-l'>{Ncontent}</CardContent>
                    <div className='flex justify-end pr-12'>
                        <Link href={url}>
                            <Button className='bg-black'>More</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default HCard
