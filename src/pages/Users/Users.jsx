import React from "react";
import TableSheet from "../../components/TableSheet/TableSheet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/dataSlice/accountSlice";
import { LogoutOutlined } from "@ant-design/icons";
const Users = () => {
  const isLoading = useSelector((state) => state.accountSlice.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isLoading === "loading") return <h2>Loading...</h2>;
  //
  const onClickLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      <div className="flex justify-end mr-3">
        <LogoutOutlined
          onClick={onClickLogout}
          className="mx-8 my-3 text-2xl"
        />
      </div>
      <TableSheet />
    </div>
  );
};

export default Users;
