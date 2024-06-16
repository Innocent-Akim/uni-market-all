
import Link from "next/link";
import { useState } from "react";
import { GrDashboard } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

export function AccordionMenu() {
    const [first, setfirst] = useState(false)
    return (
        <>
            <Link onClick={()=>setfirst(prov=>!prov)} href={'#'} className="flex items-center justify-between bg-sky-50 py-2 mx-1 rounded shadow-2xl">
                <div className="flex items-center gap-1">
                    <GrDashboard className="" />
                    <span>Dashboard</span>
                </div>
                <IoIosArrowForward className={first?`rotate-90`:''} />
            </Link>
            <div  className="flex items-center justify-between bg-sky-50 py-2 mx-1 rounded h-36">

            </div>
        </>
    )
}