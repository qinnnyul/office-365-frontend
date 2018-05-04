import React from 'react';
import { Select } from 'antd';

import './FilterSelect.css';

const Option = Select.Option;

export default props => (
  <div className="filter-select">
    <label>{props.label}</label>
    <Select defaultValue={props.defaultValue} style={{ width: 120 }}>
      {props.options.map(option => (
        <Option value={option.value}>{option.text}</Option>
      ))}
    </Select>
  </div>
);
