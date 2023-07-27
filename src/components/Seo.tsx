import React from "react";
import { Helmet } from "react-helmet";

export function Seo(props: {
  children?: React.ReactNode | React.ReactNode[];
  description?: string;
}) {
  return (
    <Helmet titleTemplate={`%s | Coffee Shop`}>
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      {props.children}
    </Helmet>
  );
}
