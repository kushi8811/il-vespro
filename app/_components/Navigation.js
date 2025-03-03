"use client";
import { useState } from "react";
import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Button to toggle menu */}
      <button
        onClick={toggleMenu}
        className="p-4 absolute top-4 text-xl left-4 z-50 bg-transparent text-accent-500 rounded pl-1"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? "X" : "☰"}
      </button>

      {/* Overlay to close the menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-primary-900 text-white w-4/5 transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 mt-24">
          <li>
            <Link
              href="/"
              className="text-2xl text-primary-800"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-2xl text-primary-800"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="text-2xl text-primary-800"
              onClick={closeMenu}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-2xl text-primary-800"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="text-2xl text-primary-800"
              onClick={closeMenu}
            >
              Book Table
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
