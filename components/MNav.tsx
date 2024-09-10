import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import SearchInput from './SearchInput'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HomeIcon } from '@radix-ui/react-icons'
function MNav() {
    return (
        <nav className='w-full flex  flex-row my-7 justify-between'>
            <div className='pl-5 my-auto'>
                <Link href={'/'}>
                    <HomeIcon className='h-6 w-6 my-auto' />
                </Link>
            </div>
            <div className='pl-5'>
                <NavigationMenu>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Category
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem href={'/category/general'} title='General' />
                                <ListItem href={'/category/world'} title='World' />
                                <ListItem href={'/category/nation'} title='Nation' />
                                <ListItem href={'/category/technology'} title='Technology' />
                                <ListItem href={'/category/entertainment'} title='Entertainment' />
                                <ListItem href={'/category/sports'} title='Sports' />
                                <ListItem href={'/category/science'} title='Science' />
                                <ListItem href={'/category/health'} title='Health' />
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
            <div className=''>
                <SearchInput />
            </div>
        </nav>
    )
}

export default MNav

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
