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
function InfoCards({ id, title, desc, content, url, image }) {
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
        </Card>
    )
}

export default InfoCards
