/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CardContent, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import Link from 'next/link'

function TopicCard({ title, image, src, pubAt, url }) {
    const dateObj = new Date(pubAt);
    const datePart = dateObj.toISOString().split('T')[0];
    return (
        <CardContent className='my-3'>
            <div className='flex flex-row justify-between mx-4 my-1'>
                <div>
                    <div className='mb-2'>
                        <Link href={src.url}>
                            <p>{src.name}</p>
                        </Link>
                    </div>
                    <Link href={url}>
                        <CardTitle className='hover:underline'>{title}</CardTitle>
                    </Link>
                </div>
                <img src={image} alt='' className='h-20 w-24 rounded-lg' />
            </div>
            <div className=''>
                <p className='mx-4'>{datePart}</p>
            </div>
            <Separator className='mx-4 mt-2' />
        </CardContent>
    )
}

export default TopicCard
