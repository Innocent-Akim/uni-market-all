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
import { LINK_DASHBOARD, LINK_ENTREE, LINK_FINANCE, LINK_IDENTIFICATE, LINK_PARAMETRE, LINK_PRODUCT, LINK_RAPPORT, LINK_SORTIE } from '@/lib/linkNavigator';


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
    items.push(
        RenderItem({
            headerText: 'Tableau de Bord',
            icon: <GrDashboard />,
            links: LINK_DASHBOARD
        })
    );
    items.push(
        RenderItem({
            headerText: 'Produicts',
            icon: <MdOutlineBookmarkAdded />,
            links: LINK_PRODUCT
        })
    );
    items.push(
        RenderItem({
            headerText: 'Sorties',
            icon: <MdAddShoppingCart />,
            links: LINK_SORTIE
        })
    );
    items.push(
        RenderItem({
            headerText: 'Entrées',
            icon: <TfiShoppingCartFull />,
            links: LINK_ENTREE
        })
    );
    items.push(
        RenderItem({
            headerText: 'Finances',
            icon: <GrPieChart />,
            links: LINK_FINANCE
        })
    );
    items.push(
        RenderItem({
            headerText: 'Rapports',
            icon: <IoFolderOpenOutline />,
            links: LINK_RAPPORT
        })
    );
    items.push(
        RenderItem({
            headerText: 'Identifications',
            icon: <BiUserPlus />,
            links: LINK_IDENTIFICATE
        })
    );
    items.push(
        RenderItem({
            headerText: 'Paramètres du système',
            icon: <SlSettings />,
            links: LINK_PARAMETRE
        })
    );

    return (
        <>
            {/* Sidebar */}
            <aside
                id='application-sidebar'
                className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-60 bg-white border-r border-slate-50 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 '
            >
                <div className='px-6'>
                    <Link
                        className='flex-none text-xl font-bold text-sky-500 dark:text-white'
                        href='/'
                        aria-label='Brand'>
                        UNI-MARKET
                    </Link>
                </div>
                <Collapse
                    ghost={true}
                    accordion
                    items={items}
                    bordered={true}
                    size='small'
                />
                <div className='text-[#737a87] text-[14.3px] mx-3 my-3'>
                    <Link
                        href='/soccase'
                        className='flex gap-2 items-center hover:text-secondary-800 duration-150'
                    >
                        <LuBellRing className='text-xl' />
                        Alertes de Stock
                    </Link>
                </div>
                <div className='text-[#737a87] text-[14.3px] mx-3 my-3'>
                    <Link
                        href='/soccase'
                        className='flex gap-2 items-center hover:text-secondary-800 duration-150'
                    >
                        <LuHelpCircle className='text-xl' />
                        Aide et Documentation
                    </Link>
                </div>
                <nav
                    className='hs-accordion-group p-6 w-full flex flex-col flex-wrap'
                    data-hs-accordion-always-open=''
                >

                </nav>
            </aside>
            {/* End Sidebar */}
        </>
    );
};

export default Siderbar
