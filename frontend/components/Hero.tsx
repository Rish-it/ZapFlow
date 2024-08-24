"use client"
import { useRouter } from "next/navigation"
import { Feature } from "./Feature"
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton"

export const Hero = () => {
    const router = useRouter();
    return (
        <div className="bg-gray-50 py-16">
            <div className="flex justify-center">
                <div className="text-5xl font-bold text-center pt-8 max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Automate as fast as you can type    
                </div>
            </div>
            <div className="flex justify-center pt-4">
                <div className="text-xl font-normal text-center pt-4 max-w-2xl text-gray-700">
                    AI gives you automation superpowers, and ZapFlow puts them to work. Pairing AI and ZapFlow helps you turn ideas into workflows and bots that work for you.
                </div>
            </div>

            <div className="flex justify-center pt-8">
                <div className="flex space-x-4">
                    <PrimaryButton 
                        onClick={() => router.push("/signup")} 
                        size="big"
                        className="transition transform hover:scale-105 duration-300"
                    >
                        Get Started Free
                    </PrimaryButton>
                    <SecondaryButton  
                        onClick={() => {}} 
                        size="big"
                        className="transition transform hover:scale-105 duration-300"
                    >
                        Contact Sales
                    </SecondaryButton>
                </div>
            </div>

            <div className="flex justify-center pt-12 space-x-8">
                <Feature title={"Free Forever"} subtitle={"for core features"} />
                <Feature title={"More apps"} subtitle={"than any other platform"} />
                <Feature title={"Cutting Edge"} subtitle={"AI Features"} />
            </div>
        </div>
    );
}
