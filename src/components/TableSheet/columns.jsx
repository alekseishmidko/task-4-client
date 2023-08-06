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
    dataIndex: "createdAt",
    sorter: {
      compare: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      multiple: 1,
    },
  },
  {
    title: "Date of last login",
    dataIndex: "updatedAt",
    sorter: {
      compare: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
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
