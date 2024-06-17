
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import { AccordionTrigger } from "../ui/accordion";
import { LuBellRing } from "react-icons/lu";
import Link from "next/link";

export function AccordionMenu() {
    return (
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger type="reset" className="">
        <div className='text-[#737a87] text-[14.3px] mx-3  py-1  px-1 rounded  w-full'>
                    <Link
                        href='#'
                        className='flex gap-2 items-center hover:text-secondary-800 duration-150'
                    >
                        <LuBellRing className='text-xl' />
                        Alertes de Stock
                    </Link>
                </div>
        </AccordionTrigger>
        <AccordionContent>
        <div className='text-[#737a87] text-[14.3px] mx-3  py-1  px-1 rounded bg-black'>
                    <Link
                        href='#'
                        className='flex gap-2 items-center hover:text-secondary-800 duration-150'
                    >
                        <LuBellRing className='text-xl' />
                        Alertes de Stock
                    </Link>
                </div>
        </AccordionContent>
      </AccordionItem>
      <div className='text-[#737a87] text-[14.3px] mx-3 my-3 py-1  px-1 rounded'>
                    <Link
                        href='#'
                        className='flex gap-2 items-center hover:text-secondary-800 duration-150'
                    >
                        <LuBellRing className='text-xl' />
                        Alertes de Stock
                    </Link>
                </div>
    </Accordion>
        
        
    )
}