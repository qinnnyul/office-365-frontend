import React from 'react';
import { Row, Col, Button, Menu, Input } from 'antd';

import Office from '../../Office';
import DiscoverTable from '../../components/DiscoverTable/DiscoverTable';

const ButtonGroup = Button.Group;
const SubMenu = Menu.SubMenu;

export default () => (
  <div>
    <Row>
      <Col span={12} offset={5}>
        <ButtonGroup>
          <Button>工具栏</Button>
          <Button>工具栏</Button>
          <Button>工具栏</Button>
        </ButtonGroup>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
        <Menu defaultOpenKeys={['sub1']} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>底稿资源</span>
              </span>
            }
          >
            <Menu.Item key="1">获取的资料</Menu.Item>
            <Menu.Item key="2">抽样分析</Menu.Item>
            <Menu.Item key="3">分析数据</Menu.Item>
            <Menu.Item key="4">访谈记录</Menu.Item>
            <Menu.Item key="5">参考资料</Menu.Item>
            <Menu.Item key="6">事实确认书</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={12} offset={1}>
        <Row>
          <Col span={12}>
            <Input />
          </Col>
          <Col span={12}>
            <span
              style={{ float: 'right', marginRight: 20, lineHeight: '30px' }}
            >
              000001
            </span>
          </Col>
        </Row>
        <Row>
          <Office />
        </Row>
        <Row>
          <DiscoverTable
            data={[
              {
                discover: 'xxxxxx',
                content: 'XXXX',
                lastModifyTime: '2018.05.01',
              },
              {
                discover: 'yyyyy',
                content: 'YYYY',
                lastModifyTime: '2018.05.01',
              },
              {
                discover: 'zzzzzz',
                content: 'ZZZZZZ',
                lastModifyTime: '2018.05.01',
              },
            ]}
          />
        </Row>
      </Col>
    </Row>
  </div>
);
