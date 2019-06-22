import React from 'react';
import Cleave from 'cleave.js/react';
import './input-date.scss';

const InputDate = ({
  value,
  onChange,
  onFocus,
}) => (
  <div className="input_date_cont">
    <span>Cumpleaños</span>
    <Cleave
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      name="date"
      id="birthday"
      placeholder="DD/MM/YYYY"
      options={{ date: true, datePattern: ['d', 'm', 'Y'] }}
    />
  </div>
);

export default InputDate;
