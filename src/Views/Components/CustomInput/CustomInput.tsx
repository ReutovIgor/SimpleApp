import React, { ChangeEvent } from 'react';
import styles from './CustomInput.module.scss';

interface Props {
  value: string;
  placeholder?: string
  onInput(text: string): void;
}

const CustomInput = (props: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='number'
        value={props.value}
        placeholder={props.placeholder}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          props.onInput(ev.target.value);
        }}
      />
    </div>
  )
}

export default CustomInput;
