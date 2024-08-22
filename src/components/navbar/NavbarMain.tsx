"use client";
import classNames from "classnames";
import { Dropdown, Navbar, useThemeMode } from "flowbite-react";
import Image from "next/image";
import { useEffect } from "react";

const NavbarMain = () => {
  const { computedMode, setMode, mode } = useThemeMode();

  useEffect(() => {
    if (computedMode === "dark") {
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.style.colorScheme = "light";
    }
  }, [computedMode]);

  return (
    <div className="container z-50 mx-auto border-b border-gray-100 dark:border-gray-700 sticky top-0">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <Image
            width={100}
            height={50}
            src={computedMode === "dark" ? "/next-white.svg" : "/next.svg"}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              computedMode === "dark" ? (
                <span className="icon-[ph--moon-fill] text-lg"></span>
              ) : (
                <span className="icon-[bxs--sun] text-lg"></span>
              )
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Theme Mode</span>
            </Dropdown.Header>
            <Dropdown.Item
              className={classNames({
                "dark:bg-gray-600": mode === "dark",
              })}
              onClick={() => {
                setMode("dark");
              }}
            >
              Dark
            </Dropdown.Item>
            <Dropdown.Item
              className={classNames({
                "bg-gray-100": mode === "light",
              })}
              onClick={() => {
                setMode("light");
              }}
            >
              Light
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className={classNames({
                "bg-gray-100 dark:bg-gray-600": mode === "auto",
              })}
              onClick={() => {
                setMode("auto");
              }}
            >
              System
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
