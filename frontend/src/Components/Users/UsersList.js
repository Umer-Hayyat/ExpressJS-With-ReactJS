import { Table } from "antd";
import React, { useEffect, useState, useCallback } from "react";
import { axiosGet } from "../../Helpers/AxiosHelper";

const getColumns = () => [
  {
    title: "Name",
    dataIndex: "name",
    key: `name-${Math.random(1000)}`,
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: `username-${Math.random(1000)}`,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: `email-${Math.random(1000)}`,
  },
];

const UsersList = (props) => {
  const [dataSource, setDataSource] = useState([]);

  const getDataFromServer = useCallback(() => {
    axiosGet("/users/all")
      .then((res) => setDataSource(res.data))
      .catch(() => alert("error"));
  }, [setDataSource]);

  useEffect(getDataFromServer, [getDataFromServer]);

  return (
    <>
      <Table dataSource={dataSource} columns={getColumns()} />
    </>
  );
};

export default UsersList;
