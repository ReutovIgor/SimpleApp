import React from 'react';
import styles from './CustomButton.module.scss';

interface Props {
  text: string,
  onPress(): void
}

const CustomButton = (props: Props) => {
  return (
    <div className={styles.container} onClick={props.onPress}>
      <span>{props.text}</span>
    </div>
  )
}

export default CustomButton;
