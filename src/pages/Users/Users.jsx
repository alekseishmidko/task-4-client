import React from "react";
import TableSheet from "../../components/TableSheet/TableSheet";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/dataSlice/accountSlice";

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
      <Button onClick={onClickLogout}>logout</Button>
      <TableSheet />
    </div>
  );
};

export default Users;
