import React from 'react';
import styles from './OperationPicker.module.scss';

interface Props {
  selected: string;
  values: Array<string>;
  onSelect(text: string): void;
}

const OperationPicker = (props: Props) => {
  return (
    <div className={styles.container}>
      <label>Operations:</label>
      <div className={styles.operationContainer}>
        {props.values.map(value => (
          <div
            key={value}
            className={`${styles.operationItem} ${props.selected === value ? styles.selected : ''}`}
            onClick={() => {
              if(typeof props.onSelect === 'function') {
                props.onSelect(value);
              }
            }}
          >
            <label>{value}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OperationPicker;
