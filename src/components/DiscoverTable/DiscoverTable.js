import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '审计发现',
    dataIndex: 'discover',
    key: 'discover',
  },
  {
    title: '发现内容描述',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: '修改时间',
    dataIndex: 'lastModifyTime',
    key: 'lastModifyTime',
  },
];

export default props => (
  <div>
    <Table columns={columns} dataSource={props.data} />
  </div>
);
