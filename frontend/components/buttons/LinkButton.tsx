"use client";

import { ReactNode } from "react"

export const LinkButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return <div className="flex justify-center px-4 py-2 cursor-pointer hover:bg-slate-300 bg-slate-50 text-black font-light text-sm rounded-full" onClick={onClick}>

        
        {children}
    </div>
}







