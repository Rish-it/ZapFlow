"use client";

export const Input = ({
    label,
    placeholder,
    onChange,
    type = "text",
    className = "", // Add className prop with a default empty string
}: {
    label: string;
    placeholder: string;
    onChange: (e: any) => void;
    type?: "text" | "password";
    className?: string; // Define className prop in the props type
}) => {
    return (
        <div>
            <div className="text-sm pb-1 pt-2">
                * <label>{label}</label>
            </div>
            <input
                className={`border rounded px-4 py-2 w-full ${className}`} // Apply the className prop
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
