"use client";

import { useEffect, useState } from "react";
import Link from 'next/link'
import React from 'react'
import WalletButton from './WalletButtons'
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Utensils } from 'lucide-react'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set state when scrolled past 50px
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container max-w-7xl mx-auto flex h-14 items-center">
        <div className="flex items-center space-x-2 font-bold">
          <Link href="/" className="flex items-center space-x-2">
            <Utensils className="h-6 w-6" />
            <span>DineRate</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <WalletButton />
        </div>
      </div>
    </header>
  )
}

export default NavBar