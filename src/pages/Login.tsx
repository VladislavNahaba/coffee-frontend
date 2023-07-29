import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Tooltip, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";

import { login } from "../actions/login";
import { AuthLayout } from "../layouts/AuthLayout";
import { customToast } from "../components/customToast";
import { Seo } from "../components/Seo";

export function LoginPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async ({ name }: { name: string }) => {
    try {
      const res = await login({ name });
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
        <title>Login Page</title>
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
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          labelCol={{ span: 24 }}
        >
          <Input
            size="large"
            title="Name"
            placeholder="Enter your name"
            suffix={
              <Tooltip title="If you are our regular customer, you can get different bonuses like additional coffee">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item labelCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
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
        Don't have an account? <Link to="/register">Signup now</Link>
      </Typography.Paragraph>
    </AuthLayout>
  );
}
