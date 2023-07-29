import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Col, Row } from "antd";
import axios from "axios";

import { orderCoffee } from "../actions/orderCoffee";
import { CoffeeLayout } from "../layouts/CoffeeLayout";
import { customToast } from "../components/customToast";
import { Seo } from "../components/Seo";
import Espresso from "../assets/img/Espresso.png";
import Cappuccino from "../assets/img/Cappuccino.png";
import Americano from "../assets/img/Americano.png";

const coffees = [
  {
    id: "Americano",
    name: "Americano",
    img: Americano,
  },
  {
    id: "Espresso",
    name: "Espresso",
    img: Espresso,
  },
  {
    id: "Cappuccino",
    name: "Cappuccino",
    img: Cappuccino,
  },
];

export function CoffeePage() {
  const navigate = useNavigate();
  const [chosenCoffee, setChosenCoffee] = useState<string | null>(null);

  const onOrder = async (coffee: string) => {
    const user = sessionStorage.getItem("user");
    const parsedUser = user && JSON.parse(user);
    if (!parsedUser) {
      return customToast.error("Please login again") && navigate("/login");
    }

    try {
      const res = await orderCoffee({ user: parsedUser, coffee });
      customToast.success(
        `You just ordered a coffee: ${res.data}! Please enjoy!`
      );
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        customToast.error(error.response?.data);
      }
    } finally {
      setChosenCoffee(null);
    }
  };

  const style: React.CSSProperties = {
    width: "150px",
    minHeight: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    cursor: "pointer",
  };

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <CoffeeLayout>
      <Seo>
        <title>Order Coffee</title>
      </Seo>

      <Typography.Title level={2}>Please choose a coffee</Typography.Title>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ marginTop: "40px" }}
      >
        {coffees.map((el) => {
          return (
            <Col
              key={el.id}
              className="gutter-row"
              span={8}
              style={wrapperStyle}
            >
              <div
                className={`coffee-box ${
                  chosenCoffee === el.id && "chosen-coffee-box"
                }`}
                style={{
                  ...style,
                  backgroundImage: `url(${el.img})`,
                }}
                onClick={() => {
                  setChosenCoffee(el.id);
                  onOrder(el.id);
                }}
              ></div>

              <Typography.Paragraph
                style={{
                  marginTop: "50px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {el.name}
              </Typography.Paragraph>
            </Col>
          );
        })}
      </Row>
    </CoffeeLayout>
  );
}
