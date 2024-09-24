import { ReactNode } from "react";

interface PrimaryButtonProps {
    children: ReactNode;
    onClick: () => void;
    size?: "big" | "small";
    className?: string;  // Optional className prop for additional styles
}

export const PrimaryButton = ({ children, onClick, size = "small", className = "" }: PrimaryButtonProps) => {
    return (
        <div 
            onClick={onClick} 
            className={`${size === "small" ? "text-sm px-8 py-2" : "text-xl px-10 py-4"} cursor-pointer hover:shadow-md bg-amber-700 text-black rounded-full text-center flex justify-center flex-col ${className}`}
        >
            {children}
        </div>
    );
};
