import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

/* {
  "id": "adults",
  "name": "Adult guests",
  "type": "number",
  "defaultValue": 1,
  "price": "100%",
  "limits": {
    "min": 1,
    "max": 9
  }
}, */

const OrderOptionNumber = ({currentValue, setOptionValue, limits, price}) => (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
   ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;
