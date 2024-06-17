import Link from 'next/link'
import React from 'react'
import { AccordionMenu } from '../global/accordion-men'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { GrDashboard } from "react-icons/gr";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { LuBellRing } from "react-icons/lu";
import { BiUserPlus } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuHelpCircle } from "react-icons/lu";
import { IoFolderOpenOutline } from "react-icons/io5";
import { GrPieChart } from "react-icons/gr";
import { usePathname } from 'next/navigation';


function Siderbar() {
    const pathname = usePathname()

    const RenderItem = ({
        headerText,
        links,
        icon,
    }: {
        headerText: string;
        links: any[];
        icon: React.ReactNode;
    }) => {

        return {
            label: (
                <div className='flex gap-2 items-center justify-between text-[#777c85]'>
                    <div className='flex gap-2 items-center text-[#737a87]'>
                        <div className='text-xl'>{icon}</div>
                        <span className='text-sm'>{headerText}</span>
                    </div>
                    <div>
                        <IoIosArrowDown className='text-[14px]' />
                    </div>
                </div>
            ),
            children: (
                <ul className='ml-2 text-gray-500'>
                    {links.map((link: HrefLink, i) => (
                        <li key={i} className='my-2'>
                            <Link
                                href={link.href}
                                className={`hover:text-[#0ea5e9] duration-150 flex gap-2 items-center ${pathname ===
                                    link.href && 'text-[#0ea5e9] font-bold'}`}
                            >
                                <MdKeyboardDoubleArrowRight className='text-[14px]' />
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            ),
            showArrow: false,

        };
    };
    const items: CollapseProps['items'] = [];
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
