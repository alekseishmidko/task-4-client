import React from "react";
import { Button, Table } from "antd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { columns, onChangeColumns } from "./columns";
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
  const { isLoading, userData, allUsers } = useSelector(
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
  const hasSelected = selectedRow.length > 0;
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
      <div style={{ marginBottom: 16 }}>
        <LockOutlined onClick={onClickBlock} />
        <UnlockOutlined onClick={onClickUnBlock} />
        <DeleteOutlined onClick={onClickRemove} />

        <span style={{ marginLeft: 12 }}>
          {hasSelected ? `Selected ${selectedRow.length} items` : ""}
        </span>
      </div>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection }}
        dataSource={allUsers}
        pagination={false}
        onChange={onChangeColumns}
      />
    </>
  );
};

export default TableSheet;
