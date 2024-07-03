import type { ReactNode } from "react"
import GlobeAlt from "./heroicons/globe-alt"
import { useLocation } from "react-router-dom"
import type { HeroIconProps } from "./heroicons/horoicons"

export interface Item {
    Name: string,
    href: string,
    icon?: ReactNode | any
}

export default function (props: { items: Item[] }) {
    return (
        <div className="w-48 absolute top-0 left-0 bg-background text-white h-full">
            <div className="grid grid-flow-col p-1 text-2xl content-center">
                <GlobeAlt color="white"/>
                REACT SSR
            </div>
            <div className="border-b-2 border-b-slate-600 mt-4 mb-4"></div>
            {props.items.map((item, index) => {

                const active: boolean = item.href === useLocation().pathname;
                
                return (
                    <a
                        key={index}
                        href={item.href}
                        className={`ml-2 mr-2 mt-1 p-1 grid grid-flow-col
                        text-left rounded-lg hover:bg-slate-600 transition
                        ${active ? 'bg-slate-800':''}`}
                    >
                        {item.icon ? item.icon : null}
                        {item.Name}
                    </a>
                )
            })}
        </div>
    )
} 