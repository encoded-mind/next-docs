import { SidebarRight } from "@/components/sidebarRight/SidebarRight";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import slugify from "slugify";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type DocsProps = {
  params: {
    slug: string;
  };
};

const loadDocs = async (slug: string) => {
  const data = await fetch(process.env.URL + "/mds/" + slug + ".md", {
    cache: "no-store",
  });
  return data.text();
};

const makeSlug = async (component: any) => {
  const ReactServer = (await import("react-dom/server")).default;
  return ReactServer.renderToString(component).replace(/<[^>]*>/g, "");
};

const Docs = async (props: DocsProps) => {
  const {
    params: { slug },
  } = props;

  const data = await loadDocs(slug);

  const addId = async (props: any) => {
    const slug = await makeSlug(props.children);
    return React.createElement(
      props.node.tagName,
      { id: slugify(slug) },
      props.children
    );
  };

  return (
    <div className="flex">
      <div className="flex-1 py-6 px-14">
        <article className="prose lg:prose-base dark:prose-invert mx-auto max-w-none">
          <Markdown
            components={{
              // @ts-expect-error
              h2: addId,
              // @ts-expect-error
              h3: addId,
              // @ts-expect-error
              h4: addId,
              // @ts-expect-error
              h5: addId,
              // @ts-expect-error
              h6: addId,
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    language={match[1]}
                    style={a11yDark}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          >
            {data}
          </Markdown>
        </article>
      </div>
      <div className="border-l border-gray-100 dark:border-gray-700 h-[calc(100vh-57px)] sticky top-[57px]">
        <SidebarRight markdown={data} />
      </div>
    </div>
  );
};

export default Docs;
