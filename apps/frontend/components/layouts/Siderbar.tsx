import Link from 'next/link'
import React from 'react'
import { AccordionMenu } from '../global/accordion-men'

function Siderbar() {
    return (
        <aside
            id='application-sidebar'
            className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-72 bg-white border-r border-r-transparent border-transparent pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-transparent '
        >
            <div className='px-6'>
                <Link
                    className='flex-none text-xl font-bold text-sky-500 dark:text-white'
                    href='/'
                    aria-label='Brand'>
                    UNI-MARKET
                </Link>
            </div>
            <AccordionMenu/>
        </aside>
    )
}

export default Siderbar
