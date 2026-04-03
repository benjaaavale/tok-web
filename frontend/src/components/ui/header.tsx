"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";

function Header1() {
    const navigationItems = [
        {
            title: "Inicio",
            href: "/",
            description: "",
        },
        {
            title: "Producto",
            description: "Gestionar tu canal de WhatsApp hoy es mucho más fácil con IA.",
            items: [
                {
                    title: "Características",
                    href: "#features",
                },
                {
                    title: "Precios",
                    href: "#pricing",
                },
                {
                    title: "Casos de Uso",
                    href: "#",
                },
                {
                    title: "Integraciones",
                    href: "#",
                },
            ],
        },
        {
            title: "Empresa",
            description: "Conoce más sobre ToK y nuestra misión de democratizar la IA.",
            items: [
                {
                    title: "Sobre nosotros",
                    href: "#",
                },
                {
                    title: "Blog",
                    href: "#",
                },
                {
                    title: "Clientes",
                    href: "#",
                },
                {
                    title: "Contacto",
                    href: "#contact",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-[100] fixed top-0 left-0 bg-[#f8fafc] dark:bg-[#0e0e0e] shadow-sm border-b border-gray-200/50 dark:border-white/5">
            <div className="max-w-7xl relative mx-auto min-h-20 flex px-4 sm:px-6 lg:px-8 gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-1 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors bg-transparent">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-white dark:bg-[#111111] border-gray-200 dark:border-gray-800">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base text-black dark:text-white font-semibold">{item.title}</p>
                                                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 bg-blue-600 hover:bg-blue-700 text-white" style={{ visibility: "hidden" }}>
                                                            Agendar Demo
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-gray-100 dark:hover:bg-neutral-800 py-2 px-4 rounded transition-colors text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-gray-400" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center items-center gap-2">
                    <img src="/images/logo-black.png" alt="ToK Logo" className="h-14 sm:h-16 dark:hidden" />
                    <img src="/images/logo-white.png" alt="ToK Logo" className="h-14 sm:h-16 hidden dark:block" />
                </div>
                <div className="flex justify-end w-full items-center">
                    <a 
                      href="https://app.tok-ai.cl" 
                      target="_blank" 
                      rel="noreferrer"
                      className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-5 py-2 bg-white text-black hover:bg-gray-100 shadow-md border border-gray-200 dark:border-gray-800"
                    >
                      Acceder a la plataforma
                    </a>
                </div>
                <div className="flex w-12 shrink lg:hidden items-center justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-black dark:text-white">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-gray-200 dark:border-gray-800 flex flex-col w-full left-0 right-0 bg-white dark:bg-[#111111] shadow-lg py-4 px-4 gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex justify-between items-center text-black dark:text-white"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-gray-500" />
                                            </a>
                                        ) : (
                                            <p className="text-lg text-black dark:text-white font-semibold">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center pl-4 py-2 text-gray-600 dark:text-gray-300"
                                                >
                                                    <span>
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </a>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <a 
                                  href="https://app.tok-ai.cl" 
                                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-black hover:bg-gray-200 shadow-sm"
                                >
                                  Acceder a la plataforma
                                </a>
                                <ShinyButton>Empieza Gratis</ShinyButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
