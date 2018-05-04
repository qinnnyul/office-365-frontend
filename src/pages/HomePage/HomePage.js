import React from 'react';

import CheckTable from '../../components/CheckTable/CheckTable';

const data = [
  {
    id: '0001',
    line: 'xxxx',
    name: '演示文档',
    person: 'XXX',
    status: '编辑',
    createdTime: '2018.05.01',
    lastModifyTime: '2018.05.02',
  },
  {
    id: '0002',
    line: 'xxxx',
    name: '演示文档2',
    person: 'XXX',
    status: '正文',
    createdTime: '2018.05.01',
    lastModifyTime: '2018.05.02',
  },
  {
    id: '0003',
    line: 'xxxx',
    name: '演示文档3',
    person: 'XXX',
    status: '完成',
    createdTime: '2018.05.01',
    lastModifyTime: '2018.05.02',
  },
];

export default () => (
  <div>
    <CheckTable data={data} />
  </div>
);
