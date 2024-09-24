"use client";
import { Appbar } from "@/components/Appbar";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function MyComponent() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-white text-white dark:bg-black min-h-screen">
            <Appbar />
            <div className="flex justify-center">
                <div className="flex pt-8 max-w-4xl">
                    <div className="flex-1 pt-20 px-4">
                        <div className="font-semibold text-3xl pb-4 text-gray-900 dark:text-white">
                            Join millions worldwide who automate their work using ZapFlow.
                        </div>
                        <div className="pb-6 pt-4">
                            <CheckFeature label={"Easy setup, no coding required"} />
                        </div>
                        <div className="pb-6">
                            <CheckFeature label={"Free forever for core features"} />
                        </div>
                        <CheckFeature label={"14-day trial of premium features & apps"} />
                    </div>
                    <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded bg-gray-100 dark:bg-gray-800">
                        <Input 
                            label={"Name"} 
                            onChange={e => setName(e.target.value)} 
                            type="text" 
                            placeholder="Your name" 
                            className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600" 
                        />
                        <Input 
                            label={"Email"} 
                            onChange={e => setEmail(e.target.value)} 
                            type="text" 
                            placeholder="Your Email" 
                            className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600" 
                        />
                        <Input 
                            label={"Password"} 
                            onChange={e => setPassword(e.target.value)} 
                            type="password" 
                            placeholder="Password" 
                            className="bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600" 
                        />
                        <div className="pt-4">
                            <PrimaryButton 
                                onClick={async () => {
                                    const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                                        username: email,
                                        password,
                                        name,
                                    });
                                    router.push("/login");
                                }} 
                                size="big"
                                className="bg-blue-500 dark:bg-blue-700 text-white"
                            >
                                Get started free
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
