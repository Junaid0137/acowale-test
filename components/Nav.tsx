import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import SearchInput from './SearchInput'
import Link from 'next/link'
import MNav from './MNav'
import { HomeIcon } from '@radix-ui/react-icons'
function Nav() {
    return (
        <>
            <div className='block md:hidden' >
                <MNav />
            </div>
            <div className='hidden md:block'>
                <nav className='w-full flex my-7 justify-cente'>
                    <Link href={'/'} className='my-auto'>
                        <HomeIcon className='h-7 w-7 my-auto' />
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/general'} className={navigationMenuTriggerStyle()}>General</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/world'} className={navigationMenuTriggerStyle()}>World</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/nation'} className={navigationMenuTriggerStyle()}>Nation</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/technology'} className={navigationMenuTriggerStyle()}>Technology</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/entertainment'} className={navigationMenuTriggerStyle()}>Entertainment</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/sports'} className={navigationMenuTriggerStyle()}>Sports</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/science'} className={navigationMenuTriggerStyle()}>science</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={'/category/health'} className={navigationMenuTriggerStyle()}>Health</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div>
                        <SearchInput />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav
