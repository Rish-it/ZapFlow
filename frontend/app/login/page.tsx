"use client";
import { Appbar } from "@/components/Appbar";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Footer } from "@/components/Footer";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function MyComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Appbar />
            <div className="relative pt-20 pb-20 flex-1">
                <GridPattern />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="opacity-0 animate-fade-in animate-delay-100">
                            <div className="font-semibold text-3xl pb-4 text-white">
                                Join millions worldwide who automate their work using ZapFlow.
                            </div>
                            <div className="pt-6 space-y-6">
                                <CheckFeature label={"Easy setup, no coding required"} />
                                <CheckFeature label={"Free forever for core features"} />
                                <CheckFeature label={"14-day trial of premium features & apps"} />
                            </div>
                        </div>
                        <div className="opacity-0 animate-fade-in animate-delay-200">
                            <div className="diagram-container p-8 rounded-lg backdrop-blur-sm">
                                <h2 className="text-2xl font-bold mb-6 gradient-text">Login to ZapFlow</h2>
                                <div className="space-y-4">
                                    <Input 
                                        onChange={e => setEmail(e.target.value)} 
                                        label={"Email"} 
                                        type="text" 
                                        placeholder="Your Email" 
                                        className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-violet-500"
                                    />
                                    <Input 
                                        onChange={e => setPassword(e.target.value)} 
                                        label={"Password"} 
                                        type="password" 
                                        placeholder="Password" 
                                        className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:border-violet-500"
                                    />
                                    <div className="pt-6">
                                        <Button 
                                            variant="gradient"
                                            className="w-full button-gradient-hover glow-effect"
                                            onClick={async () => {
                                                try {
                                                    const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                                                        username: email,
                                                        password,
                                                    });
                                                    localStorage.setItem("token", res.data.token);
                                                    router.push("/dashboard");
                                                } catch (error) {
                                                    console.error("Login error:", error);
                                                    alert("Login failed. Please check your credentials.");
                                                }
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Gradient glow effects */}
                <div className="absolute top-1/3 left-0 w-1/4 h-1/4 bg-purple-600/20 rounded-full filter blur-[120px] opacity-50"></div>
                <div className="absolute bottom-1/3 right-0 w-1/4 h-1/4 bg-blue-600/20 rounded-full filter blur-[120px] opacity-50"></div>
            </div>
            <Footer />
        </div>
    );
}
