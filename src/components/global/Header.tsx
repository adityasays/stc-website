"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaBarsStaggered,
  FaFaceSmileBeam,
  FaHouse,
  FaNewspaper,
  FaTrophy,
  FaUserGroup,
} from "react-icons/fa6";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import Logo from "./Logo";

const NavItem = ({
  to,
  icon: Icon,
  iconSize = "size-4",
  children,
  onClick,
  className,
}: {
  to: string;
  icon: IconType;
  iconSize?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <Link href={to}>
    <li
      className={cn(
        "hover: flex items-center justify-center rounded-md border-2 border-transparent px-6 py-2 hover:border-neutral-700 hover:bg-neutral-950",
        className,
      )}
      onClick={onClick}
    >
      <Icon className={`${iconSize} mr-2`} />
      {children}
    </li>
  </Link>
);

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header
        className={`font-inter fixed top-0 z-50 h-16 w-full select-none text-white ${isDropdownOpen ? "bg-black" : "bg-black/70 backdrop-blur-lg"}`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">
          <Logo />
          <div
            className="cursor-pointer p-4 sm:hidden"
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? (
              <IoClose className="size-7" />
            ) : (
              <FaBarsStaggered className="size-6" />
            )}
          </div>
          <nav className="hidden sm:flex">
            <ul className="flex">
              <NavItem
                to="/events"
                icon={HiMiniRectangleGroup}
                iconSize="size-5"
              >
                Events
              </NavItem>
              <NavItem to="/team" icon={FaUserGroup}>
                Team
              </NavItem>
              <NavItem to="/awards" icon={FaTrophy}>
                Awards
              </NavItem>
              <NavItem to="/contact" icon={MdLocalPostOffice} iconSize="size-5">
                Contact
              </NavItem>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-16 z-40 w-full transition-all duration-300 ease-in-out md:hidden ${
          isDropdownOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <MobileNav onChildClick={toggleDropdown} />
      </div>
    </>
  );
}

function MobileNav({ onChildClick }: { onChildClick: () => void }) {
  return (
    <nav className="border-b-2 border-neutral-800 bg-black p-4 text-white shadow-xl shadow-black/70">
      <ul className="grid grid-cols-2 items-center gap-4 rounded-md text-lg">
        <NavItem
          onClick={onChildClick}
          to="/events"
          iconSize="size-5"
          icon={HiMiniRectangleGroup}
          className="border-2 bg-neutral-900 py-3 hover:border-neutral-700 hover:bg-neutral-950"
        >
          Events
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/team"
          icon={FaUserGroup}
          className="border-2 bg-neutral-900 py-3 hover:border-neutral-700 hover:bg-neutral-950"
        >
          Team
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/awards"
          icon={FaTrophy}
          className="border-2 bg-neutral-900 py-3 hover:border-neutral-700 hover:bg-neutral-950"
        >
          Awards
        </NavItem>
        <NavItem
          onClick={onChildClick}
          to="/contact"
          icon={MdLocalPostOffice}
          iconSize="size-5"
          className="border-2 bg-neutral-900 py-3 hover:border-neutral-700 hover:bg-neutral-950"
        >
          Contact
        </NavItem>
      </ul>
      <div className="pt-4 text-center text-sm font-normal text-neutral-400">
        Designed and Developed in India
      </div>
    </nav>
  );
}
