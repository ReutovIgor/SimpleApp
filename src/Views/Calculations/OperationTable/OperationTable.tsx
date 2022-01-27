import React, { ChangeEvent } from 'react';
import { ResultState } from '../defines';
import styles from './OperationTable.module.scss';

interface Props {
  headers: string[]
  data: Array<ResultState>
}

const OperationTable = (props: Props) => {
  return (
    <table className={styles.container} cellSpacing='0'>
      <thead>
        <tr key={'header'}>
          {props.headers.map((h, i) => (
            <th key={`${h}_${i}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td key={`${item.id}_input1`}>{item.input1}</td>
            <td key={`${item.id}_input2`}>{item.input2}</td>
            <td key={`${item.id}_action`}>{item.action}</td>
            <td key={`${item.id}_result`}>{item.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OperationTable;
