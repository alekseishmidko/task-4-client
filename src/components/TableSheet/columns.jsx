import { Tag } from "antd";

export const columns = [
  {
    title: "ID",
    dataIndex: "_id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Date of registration",
    dataIndex: "dateOfCreate",
    sorter: {
      compare: (a, b) => new Date(a.dateOfCreate) - new Date(b.dateOfCreate),
      multiple: 1,
    },
  },
  {
    title: "Date of last login",
    dataIndex: "dateOfLastLogin",
    sorter: {
      compare: (a, b) =>
        new Date(a.dateOfLastLogin) - new Date(b.dateOfLastLogin),
      multiple: 1,
    },
  },
  {
    title: "Status",
    dataIndex: "status",

    filters: [
      {
        text: "active",
        value: "active",
      },
      {
        text: "notActive",
        value: "notActive",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];

export const onChangeColumns = (pagination, filters, sorter, extra) => {
  // console.log("params", pagination, filters, sorter, extra);
};
