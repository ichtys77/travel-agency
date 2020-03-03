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

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
   ({formatPrice(price)})

  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
