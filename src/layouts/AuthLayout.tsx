import React from "react";
import { Typography, Layout } from "antd";
import Coffee from "../assets/img/coffee.png";

export function AuthLayout(props: {
  children: React.ReactNode | React.ReactNode[];
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
            backgroundImage: `url(${Coffee})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "40%",
          }}
        >
          <Typography.Title level={2}>Welcome to Coffee Shop</Typography.Title>
          <div
            style={{
              margin: "auto",
              maxWidth: "500px",
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
