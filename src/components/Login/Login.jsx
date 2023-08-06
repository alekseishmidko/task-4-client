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
    <>
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
          name={["password"]}
          label="Password"
          rules={[{ type: "string", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <h4>
            Havent Acc?
            <Link to={"/register"}>
              <span>Create account</span>
            </Link>
          </h4>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
