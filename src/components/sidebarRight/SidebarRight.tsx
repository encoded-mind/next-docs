"use client";

import { SidebarTheme } from "@/themes/SidebarTheme";
import classNames from "classnames";
import { Sidebar } from "flowbite-react";
import slugify from "slugify";

type Header = {
  level: number;
  text: string;
};

const extractHeading = (markdown: string): Header[] => {
  const headers: Header[] = [];

  const headerRegex = /^(#{2,6})\s+(.*)$/gm;

  let match;

  while ((match = headerRegex.exec(markdown)) !== null) {
    const headerText = match[2];
    const level = match[1].length;

    headers.push({
      text: headerText,
      level,
    });
  }

  return headers;
};

type SidebarRightProps = {
  markdown: string;
};
export function SidebarRight(props: SidebarRightProps) {
  const headers = extractHeading(props.markdown);

  return (
    <>
      <p className="text-base font-bold uppercase mx-8 mt-6">On This Page</p>
      <Sidebar theme={SidebarTheme} aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {headers.map((header) => {
              return (
                <>
                  <Sidebar.Item
                    href={"#" + slugify(header.text)}
                    className={classNames({
                      "ml-4": header.level === 3,
                      "ml-8": header.level === 4,
                      "ml-12": header.level === 5,
                      "ml-16": header.level === 6,
                    })}
                    key={header.text}
                  >
                    {header.text}
                  </Sidebar.Item>
                </>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
