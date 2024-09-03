"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/aceternity/NavbarMenu";
import { cn } from "@/lib/utils";
import NavbarActions from "../navbar-actions";
import ThemeToggler from "../ThemeToggler";


export default function NavbarMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 w-full flex justify-center z-50 ", className)}
        >
            <Menu setActive={setActive}>


                <MenuItem href="/" setActive={setActive} active={active} item="Home">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Landing Page"
                            href="/"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>

                <MenuItem href="/portfolio" setActive={setActive} active={active} item="Portfolio">
                    <div className="flex flex-col space-y-4 text-sm">
                       View Portfolio Page
                    </div>
                </MenuItem>

                <MenuItem href="/login" setActive={setActive} active={active} item="Login">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Registration</HoveredLink>
                        <HoveredLink href="/individual">Login</HoveredLink>
                    </div>
                </MenuItem>

                <ThemeToggler />

                <NavbarActions/>
            </Menu>
        </div>
    );
}
