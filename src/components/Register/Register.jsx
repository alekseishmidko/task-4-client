import React from "react";
import { Button, Form, Input } from "antd";
import { validateMessages } from "../../midwares/validatesMessages";
import { layout } from "../../midwares/layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRegistration } from "../../store/dataSlice/accountSlice";
import { RollbackOutlined } from "@ant-design/icons";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (formData) => {
    dispatch(fetchRegistration(formData));
    navigate("/users");
  };

  return (
    <>
      <RollbackOutlined
        onClick={() => navigate(-1)}
        className="mx-4 my-1 text-xl"
      />

      <div className="max-w-2xl mx-auto p-14 ">
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          className="bg-white rounded px-8 pt-6 pb-8 mb-5"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name={["name"]}
            label="Name"
            rules={[{ type: "string", required: true }]}
          >
            <Input
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </Form.Item>
          <Form.Item
            name={["password"]}
            label="Password"
            rules={[{ type: "string", required: true }]}
          >
            <Input
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full rounded bg-blue-500 hover:bg-blue-600 mt-4"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
