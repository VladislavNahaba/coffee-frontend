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
      {children}
    </Helmet>
  );
}
