import React from "react";
import { Typography, Col, Row } from "antd";

import { Quota } from "../types/quota";
import { CoffeeLayout } from "../layouts/CoffeeLayout";
import { Seo } from "../components/Seo";
import Food from "../assets/img/food.png";
import { useFetch } from "../helpers/useFetch";

export function KitchenPage() {
  const { data } = useFetch<Quota[]>("/qouta", []);

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <CoffeeLayout
      styles={{
        backgroundImage: `url(${Food})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40%",
      }}
    >
      <Seo>
        <title>Kitchen</title>
      </Seo>

      <Typography.Title level={2}>Kitchen</Typography.Title>

      <Typography.Title level={4}>Qoutas</Typography.Title>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "40px" }}
      >
        {data.map((el) => {
          return (
            <Col
              key={el.id}
              className="gutter-row"
              span={8}
              style={wrapperStyle}
            >
              <Typography.Paragraph
                style={{
                  marginTop: "30px",
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                {el.name}
              </Typography.Paragraph>

              {el.quotas.map((el) => {
                return (
                  <Col>
                    {el.coffee.type}({el.amount}) {el.type}
                  </Col>
                );
              })}
            </Col>
          );
        })}
      </Row>
    </CoffeeLayout>
  );
}
