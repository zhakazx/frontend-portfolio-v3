"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, ChevronRight } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const activeSection = useActiveSection();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* <Link href="/" className="text-2xl font-bold text-primary">
            {"</>"}
          </Link> */}
          <Image src="/logo-zh.png" alt="Logo" width={70} height={70} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="h-70 [&>button]:hidden">
              <SheetHeader className="flex flex-row justify-between items-center">
                <SheetTitle className="text-left text-xl font-bold text-primary">
                  Menu
                </SheetTitle>
                <SheetClose asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </SheetClose>
              </SheetHeader>

              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4"
                      >
                        <div className="flex justify-between items-center px-2">
                          <span
                            className={`text-md font-medium transition-colors duration-200 ${
                              isActive
                                ? "text-primary font-semibold"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {item.name}
                          </span>
                          <ChevronRight className="ml-2 w-4 h-4 text-muted-foreground hover:text-primary" />
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
