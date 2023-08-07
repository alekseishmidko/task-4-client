import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { validateMessages } from "../../midwares/validatesMessages";
import { layout } from "../../midwares/layout";
import { fetchLogin } from "../../store/dataSlice/accountSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //

  const onFinish = (formData) => {
    console.log(formData);
    try {
      dispatch(fetchLogin(formData));
      navigate("/users");
    } catch (error) {
      console.error("error while fetchLogin:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-14  ">
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
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
          name={["password"]}
          label="Password"
          rules={[{ type: "string", required: true }]}
        >
          <Input
            className="w-full p-2 border rounded"
            type="password"
            placeholder="Enter your password"
            allowClear
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <h4 className="mb-2">
            Haven't Acc?
            <Link to={"/register"} className="ml-3 text-blue-500">
              Create account
            </Link>
          </h4>
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
  );
};

export default Login;
