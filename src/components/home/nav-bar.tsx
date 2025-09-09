"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const socialIcons = [
  { name: "facebook", icon: "fa-brands fa-facebook-f", href: "#" },
  { name: "google-plus", icon: "fa-brands fa-google-plus-g", href: "#" },
  { name: "youtube", icon: "fa-brands fa-youtube", href: "#" },
  { name: "twitter", icon: "fa-brands fa-twitter", href: "#" },
];

const navLinks = [
  { name: "HOME", href: "/" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Construction Equipment", href: "/products/construction" },
      { name: "Mining Equipment", href: "/products/mining" },
      { name: "Industrial Tools", href: "/products/tools" },
      { name: "Safety Equipment", href: "/products/safety" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Equipment Rental", href: "/services/rental" },
      { name: "Maintenance", href: "/services/maintenance" },
      { name: "Consulting", href: "/services/consulting" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header only when at the very top (within 5px tolerance)
      // Hide header when scrolling down, but prevent issues with overscroll
      if (currentScrollY <= 5) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > 5) {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full block shadow-xs sticky z-50 bg-white transition-transform duration-300 ${
        isHeaderVisible ? "top-0" : "-top-[50px]"
      }`}
    >
      <div
        className="flex flex-row justify-between h-full w-full items-center px-4 py-3 bg-primary/95 text-secondary"
        id="nav-header"
      >
        <div className="flex flex-row gap-2 items-center">
          <i className="fa-regular fa-hand-point-right text-yellow"></i>
          <h4 className="  text-secondary ">
            <Link
              href="#!"
              className="font-bold underline hover:no-underline hover:text-yellow"
            >
              Latest Updates
            </Link>{" "}
            Get Upto 45% Off The Best Construction Equipment Deals At Antek
          </h4>
        </div>
        <div className="flex flex-row gap-6 items-center text-base">
          <div className="flex flex-row gap-3 items-center ">
            <i className="fa-regular fa-clock text-yellow"></i>
            <span>Mon - Sat 9.00 - 18.00</span>
          </div>
          <div className="w-px h-6 bg-white/35"></div>
          <div className="flex flex-row gap-3 items-center ">
            <i className="fa-solid fa-sign-in-alt text-yellow"></i>
            <span>Login or Register</span>
          </div>
          <div className="w-px h-6 bg-white/35"></div>
          <div className="flex flex-row gap-5 items-center ">
            {socialIcons.map((social) => (
              <Link key={social.name} href={social.href}>
                <i className={`${social.icon} text-secondary/35`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-stretch min-w-full h-full justify-between pl-4">
        <div className="flex flex-row items-center justify-between pr-6 py-">
          <Image
            src="/logo.png"
            alt="Logo"
            width={167}
            height={100}
            className=""
          />
          <div className="w-px h-16 bg-gray-300 mx-6"></div>
          <div className="flex flex-row gap-3 items-center">
            <i className="fas fa-headset text-yellow text-4xl"></i>
            <div>
              <h3 className="text-base text-primary font-medium  ">
                Get Quick Support
              </h3>
              <span className=" text-primary font-semibold text-2xl">
                236-547-8900
              </span>
            </div>
          </div>
          <div className="w-px h-16 bg-gray-300 mx-6"></div>
        </div>
        {showSearchInput ? (
          <div className="flex flex-row items-center flex-1 px-8">
            <input
              type="text"
              className="navbar-search-input w-full border-0 outline-none text-xl placeholder:text-gray-400 bg-transparent"
              placeholder="Search..."
            />
          </div>
        ) : (
          <nav className=" relative bg-red-700">
            <NavigationMenu className=" absolute top-0  translate-y-[15%] min-h-full bg-amber-500   w-full">
              <NavigationMenuList className=" min-h-full">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-primary font-medium hover:text-yellow bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-yellow">
                          {link.name.toUpperCase()}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-[200px] p-2 bg-white ">
                          <div className="grid gap-1">
                            {link.submenu.map((sublink) => (
                              <NavigationMenuLink key={sublink.name} asChild>
                                <Link
                                  href={sublink.href}
                                  className="block px-3 py-2 text-sm text-primary hover:bg-yellow/10 hover:text-yellow rounded-md transition-colors"
                                >
                                  {sublink.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="text-primary font-medium hover:text-yellow transition-colors px-4 py-2"
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}
        <div className="flex flex-row items-stretch">
          <button
            className="flex items-center border-l justify-center px-6 hover:text-yellow transition-colors  border-gray-300  button-search"
            title="Search"
            aria-label="Search"
            onClick={() => setShowSearchInput(!showSearchInput)}
          >
            <i className="fas fa-search text-primary text-2xl"></i>
          </button>
          <button
            className="nav-bar-cart-btn relative flex items-center justify-center px-6 transition-colors  hover:text-yellow"
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <i className="fas fa-shopping-cart text-secondary text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
