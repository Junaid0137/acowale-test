"use client";
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from "zod"
import { FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';
const formSchema = z.object({
    username: z.string().min(1).max(50),
})
function SearchInput() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        router.push(`/search/${values.username}`);
    }
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className='w-24 md:w-44 mr-4 my-auto shadow-sm' placeholder='Search' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </FormProvider>
    )
}

export default SearchInput
