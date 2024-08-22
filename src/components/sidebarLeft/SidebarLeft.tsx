"use client";

import { SidebarTheme } from "@/themes/SidebarTheme";
import { Sidebar } from "flowbite-react";
import Link from "next/link";

export function SidebarLeft() {
  return (
    <>
      <p className="text-base font-bold uppercase mx-8 mt-6">
        Guides & Tutorials
      </p>
      <Sidebar theme={SidebarTheme} aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} href="/docs/intro">
              What is Next.js?
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/docs/next-js-page-route">
              Next.Js with Page Route
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/docs/next-js-app-route">
              Next.Js with App Route
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/docs/app-route-vs-page-route">
              App Route vs Page Route
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
