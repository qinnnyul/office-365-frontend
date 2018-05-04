import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

import CheckTable from '../../components/CheckTable/CheckTable';
import FilterSelect from '../../components/FilterSelect/FilterSelect';

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
    <Row>
      <Col span={24}>
        <FilterSelect
          label="条线筛选"
          options={[
            {
              value: 'xxx1',
              text: 'xxx',
            },
            {
              value: 'xxx2',
              text: 'xxx',
            },
            {
              value: 'xxx3',
              text: 'xxx',
            },
          ]}
        />

        <FilterSelect
          label="人员筛选"
          defaultValue="XXX"
          options={[
            {
              value: 'xxx1',
              text: 'XXX',
            },
            {
              value: 'xxx2',
              text: 'YYY',
            },
            {
              value: 'xxx3',
              text: 'ZZZ',
            },
          ]}
        />

        <Button type="primary">
          <Link to="/edit">新建审计工作底稿</Link>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <CheckTable data={data} />
      </Col>
    </Row>
  </div>
);
