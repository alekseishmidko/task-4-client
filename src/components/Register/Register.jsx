import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { validateMessages } from "../../midwares/validatesMessages";
import { layout } from "../../midwares/layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegistration } from "../../store/dataSlice/accountSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (formData) => {
    dispatch(fetchRegistration(formData));
    navigate("/users");
  };

  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["name"]}
          label="Name"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["password"]}
          label="Password"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
