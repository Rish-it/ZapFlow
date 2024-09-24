// import { ReactNode } from "react"

// export const SecondaryButton = ({ children, onClick, size = "small" }: {
//     children: ReactNode,
//     onClick: () => void,
//     size?: "big" | "small"
// }) => {
//     return <div onClick={onClick} className={`${size === "small" ? "text-sm" : "text-xl"} ${size === "small" ? "px-8 pt-2" : "px-10 py-4"} cursor-pointer hover:shadow-md border text-black border-black rounded-full`}>
//         {children}
//     </div>
// }




import { ReactNode } from "react";

interface SecondaryButtonProps {
    children: ReactNode;
    onClick: () => void;
    size?: "big" | "small";
    className?: string;  // Optional className prop for additional styles
}

export const SecondaryButton = ({ children, onClick, size = "small", className = "" }: SecondaryButtonProps) => {
    return (
        <div 
            onClick={onClick} 
            className={`${size === "small" ? "text-sm px-8 pt-2" : "text-xl px-10 py-4"} cursor-pointer hover:shadow-md border bg-white text-black border-black rounded-full text-center flex justify-center flex-col ${className}`}
        >
            {children}
        </div>
    );
};
