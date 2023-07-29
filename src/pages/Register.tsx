import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Tooltip, Select, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";

import { Membership } from "../types/membership";
import { register } from "../actions/register";
import { AuthLayout } from "../layouts/AuthLayout";
import { customToast } from "../components/customToast";
import { Seo } from "../components/Seo";

export function RegisterPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async ({
    name,
    membership,
  }: {
    name: string;
    membership: Membership["type"];
  }) => {
    try {
      const res = await register({ name, membership });
      sessionStorage.setItem("user", JSON.stringify(res.data));
      navigate("/coffee");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        customToast.error(error.response?.data);
      }
    }
  };

  return (
    <AuthLayout>
      <Seo>
        <title>Register Page</title>
      </Seo>
      <Form
        name="basic"
        initialValues={{ name: "", membership: "basic" }}
        onFinish={onFinish}
        onFinishFailed={(error) => customToast.error(error)}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          labelCol={{ span: 24 }}
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            title="Name"
            placeholder="Enter your name"
            size="large"
            suffix={
              <Tooltip title="If you are our regular customer, you can get different bonuses like additional coffee">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item
          label="Membership"
          name="membership"
          labelCol={{ span: 24 }}
          rules={[{ required: true }]}
        >
          <Select size="large">
            <Select.Option value="basic">Basic</Select.Option>
            <Select.Option value="coffee-lover">Coffee Lover</Select.Option>
            <Select.Option value="americano-maniac">
              Americano Maniac
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item labelCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().some(({ errors }) => errors.length)
            }
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Typography.Paragraph>
        Already have an account? <Link to="/login">Signin</Link>
      </Typography.Paragraph>
    </AuthLayout>
  );
}
