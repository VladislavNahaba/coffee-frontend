import React from "react";
import { Helmet } from "react-helmet";

export function Seo({
  children,
  description,
}: {
  children?: React.ReactNode | React.ReactNode[];
  description?: string;
}) {
  return (
    <Helmet titleTemplate={`%s | Coffee Shop`}>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Coffeeshop.org" />
      <meta property="og:title" content="Coffee Shop" />
      <meta property="og:description" content="Coffee Shop for maniacs" />
      <meta
        property="og:image"
        content="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS5iKBhe62Mbj3CavwfKcI3qEhN2U8KryfZnGyQXjb-h8A9ctiF-dDtHlDLptk-mK2s"
      />
      <meta property="og:image:alt" content="Coffee Shop for maniacs" />
      <meta property="og:site_name" content="Coffee Shop" />
      {children}
    </Helmet>
  );
}
