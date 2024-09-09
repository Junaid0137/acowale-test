/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button';
function InfoCards({ id, title, desc, content, url, image, src }) {
    const Ncontent = content.replace(/\[\d+ chars\]/, "");
    return (
        <Card key={id}>
            <CardHeader>
                <Link href={url}>
                    <CardTitle className='hover:underline'>{title}</CardTitle>
                </Link>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <img className='rounded-lg mb-5' src={image} alt='' />
                {Ncontent}
            </CardContent>
            <CardFooter className='flex justify-between '>
                <Link href={src.url} className='flex flex-row'>
                    <h1>Source -</h1>
                    <h1 className='text-gray-400 pl-2 hover:underline'>{src.name}</h1>
                </Link>
                <Link href={url}>
                    <Button className='bg-black hover:bg-white hover:text-black hover:border hover:border-black'>More</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default InfoCards
