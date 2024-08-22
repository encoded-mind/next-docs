import { SidebarRight } from "@/components/sidebarRight/SidebarRight";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex-1 py-6 px-14">
          <article className="prose lg:prose-base dark:prose-invert mx-auto max-w-none">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>
        </div>
        <div className="border-l border-gray-100 dark:border-gray-700 h-[calc(100vh-57px)]">
          <SidebarRight />
        </div>
      </div>
    </>
  );
}
