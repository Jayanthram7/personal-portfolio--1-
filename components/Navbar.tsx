"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <Link
        href="/"
        className="block py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono transition-all hover:rounded-xl duration-200"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="block py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono transition-all hover:rounded-xl duration-200"
      >
        About 
      </Link>
      <Link
        href="/projects"
        className="block py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono transition-all hover:rounded-xl duration-200"
      >
        Projects
      </Link>
      <Link
        href="/resume"
        className="block py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono transition-all hover:rounded-xl duration-200"
      >
        Resume
      </Link>
    
      
      <DropdownMenu>
        <DropdownMenuTrigger className="block py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-mono transition-all hover:rounded-xl duration-200">
          Contact
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a
              href="mailto:jayanthramnithin@gmail.com"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail" className="mr-2 h-5 w-5" />
              <span>Gmail</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              href="https://wa.me/919965576297"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="mr-2 h-5 w-5"
              />
              <span>WhatsApp</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-orange-400 overflow-hidden via-purple-500 to-pink-500 opacity-20 blur-3xl" />

      <div className="container flex h-16 items-center justify-between relative">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col py-6">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="flex flex-row items-center gap-2">
            <span className="text-2xl font-bold text-center m-0">JAYANTH</span>
            <span className="text-xl font-light tracking-[0.15em] text-center m-0">STUDIOS</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          <NavItems />
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

