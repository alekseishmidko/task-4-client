import React from "react";
import TableSheet from "../../components/TableSheet/TableSheet";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { columns } from "../../components/TableSheet/columns";

const Users = () => {
  const { data } = useSelector((state) => state.accountSlice);
  const isLoading = useSelector((state) => state.accountSlice.isLoading);
  const navigate = useNavigate();
  if (isLoading === "loading") return <h2>Loading...</h2>;
  //

  return (
    <div>
      <Button onClick={() => navigate("/")}>Exit</Button>
      <TableSheet />
      {/*  */}
    </div>
  );
};

export default Users;
