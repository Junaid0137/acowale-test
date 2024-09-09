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
function Nav() {
    return (
        <>
            <div className='block md:hidden' >
                <MNav />
            </div>
            <div className='hidden md:block'>
                <nav className='w-full flex my-7 justify-cente'>
                    <Link href={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

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
