import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';


/* {
  "id": "features",
  "name": "Features",
  "type": "checkboxes",
  "values": [
    {"id": "all-inclusive", "name": "All inclusive", "price": 200},
    {"id": "kitchen", "name": "Private kitchen", "price": 500},
    {"id": "pool", "name": "Private pool", "price": 1000},
    {"id": "security", "name": "Security escort", "price": 2000}
  ]
}, */

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};


const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value =>(
      <label
        key = {value.id}
      >
        <input
          type="checkbox"
          value={value.id}
          checked={currentValue.includes(value.id)}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.array,

};

export default OrderOptionCheckboxes;
