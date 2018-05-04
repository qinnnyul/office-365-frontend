import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: '系统编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '条线',
    dataIndex: 'line',
    key: 'line',
  },
  {
    title: '审计工作底稿名称',
    dataIndex: 'name',
    render: name => <Link to="/edit">{name}</Link>,
  },
  {
    title: '审计人员',
    dataIndex: 'person',
    key: 'person',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '建立时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
  },
  {
    title: '末次修改时间',
    dataIndex: 'lastModifyTime',
    key: 'lastModifyTime',
  },
];

export default props => (
  <div>
    <Table columns={columns} dataSource={props.data} />
  </div>
);
