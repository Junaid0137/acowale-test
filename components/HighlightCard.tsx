import React from 'react'
import { CardContent, CardTitle } from './ui/card'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator'

function HighlightCard({ title, src, pubAt, url, desc }) {
    const dateObj = new Date(pubAt);
    const datePart = dateObj.toISOString().split('T')[0];
    return (
        <CardContent className='bg-white rounded-xl mb-5 p-2 pt-5'>
            <div className='flex flex-row justify-between mx-4'>
                <div className='space-y-3'>
                    <div className='mb-2'>
                        <Link href={src.url}>
                            <p>{src.name}</p>
                        </Link>
                    </div>
                    <Link href={url}>
                        <CardTitle className='hover:underline'>{title}</CardTitle>
                    </Link>
                    <p className='text-gray-500'>
                        {desc}
                    </p>
                </div>
            </div>
            <div className='mt-2 flex justify-end '>
                <p className='mx-4 text-gray-500'>{datePart}</p>
            </div>
            <Separator className='mx-4 mt-2' />
        </CardContent>
    )
}

export default HighlightCard
