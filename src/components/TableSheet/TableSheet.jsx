import React from "react";
import { Button, Table } from "antd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { columns } from "./columns";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchBlock,
  fetchUnBlock,
  fetchRemove,
} from "../../store/dataSlice/accountSlice";
import {
  DeleteOutlined,
  UnlockOutlined,
  LockOutlined,
} from "@ant-design/icons";
const TableSheet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, userData, allUsers } = useSelector(
    (state) => state.accountSlice
  );

  const filterd = allUsers.filter((item) => {
    return item.status === "notActive";
  });
  const find = (array, targetID) => {
    return array.some((item) => item._id === targetID);
  };
  const findInAllUsers = find(filterd, userData._id);

  const [selectedRow, setSelectedRow] = React.useState([]);
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(
      //   record,
      //   "record",
      //   selected,
      //   "selected",
      //   selectedRows,
      //   "selectedrows!!!"
      // );
      setSelectedRow(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
      setSelectedRow(selectedRows);
    },
  };

  const userIds = selectedRow.map((item) => {
    return item._id;
  });

  const onClickUnBlock = () => {
    dispatch(fetchUnBlock(userIds));
  };
  const onClickBlock = () => {
    dispatch(fetchBlock(userIds));
  };
  const onClickRemove = () => {
    dispatch(fetchRemove(userIds));
  };

  React.useEffect(() => {
    if (findInAllUsers === true) {
      navigate("/");
    }
    if (isLoading === "error") {
      navigate("/");
    }
    if (allUsers.length === 0) {
      navigate("/");
    }
  }, [allUsers, isLoading]);
  return (
    <>
      <Button onClick={onClickBlock}>Block</Button>
      <UnlockOutlined onClick={onClickUnBlock} />
      <DeleteOutlined onClick={onClickRemove} />

      {/* <Button onClick={onClickUnBlock}>unBlock</Button>
      <Button onClick={onClickRemove}>Remove</Button> */}

      <Table
        columns={columns}
        rowSelection={{ ...rowSelection }}
        dataSource={allUsers}
        pagination={false}
      />
    </>
  );
};

export default TableSheet;
