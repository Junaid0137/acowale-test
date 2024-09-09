import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Skeleton } from './ui/skeleton'
function SkeletonCard() {
    return (
        <div>
            <Card className="items-center justify-center">
                <CardHeader>
                    <Skeleton className='w-1/2 h-8 rounded-md' />
                    <Skeleton className='w-1/3 h-5 mt-2 rounded-md' />
                </CardHeader>
                <CardContent>
                    <Skeleton className='flex h-[150px] w-[250px]' />
                    <Skeleton className='w-full h-6 mt-2 rounded-md' />
                    <Skeleton className='w-1/3 h-6 mt-2 rounded-md' />
                </CardContent>
                <CardFooter>
                    <Skeleton className='w-1/2 h-12 mt-2 rounded-md' />
                </CardFooter>
            </Card>
        </div>
    )
}

export default SkeletonCard
