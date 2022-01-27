import React, { ChangeEvent } from 'react';
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
      <div className={styles.radioContainer}>
        {props.values.map(value => (
          <div key={value} >
            <input
              type='radio'
              value={value}
              name='operation'
              checked={props.selected === value}
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                props.onSelect(ev.target.value);
              }}
            />
            <label>{value}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OperationPicker;
