import React from "react";
import { Layout } from "antd";

export function CoffeeLayout(props: {
  children: React.ReactNode | React.ReactNode[];
  styles?: React.CSSProperties;
}) {
  return (
    <Layout
      style={{
        position: "relative",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "stretch",
        height: "100vh",
        background: "white",
      }}
    >
      <main
        style={{
          display: "flex",
          flex: "1 1 auto",
          padding: "20px",
        }}
      >
        <section
          style={{
            width: "100%",
            ...props.styles,
          }}
        >
          <div
            style={{
              margin: "auto",
              maxWidth: "1200px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            {props.children}
          </div>
        </section>
      </main>
    </Layout>
  );
}
