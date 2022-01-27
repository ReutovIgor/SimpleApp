import React, { useReducer } from 'react';
import styles from './Calculations.module.scss';
import CustomInput from '../Components/CustomInput/CustomInput';
import CustomButton from '../Components/CustomButton/CustomButton';
import { useState } from 'react';
import OperationPicker from './OperationPicker/OperationPicker';
import OperationTable from './OperationTable/OperationTable';
import { ActionType, ResultState } from './defines';

interface ActionObject {
  type: ActionType
  payload: {
    input1: number
    input2: number
  }
}

function reducer(state: Array<ResultState>, action: ActionObject): Array<ResultState> {
  const { type, payload } = action;
  const newResults = [...state];
  switch (type) {
    case ActionType.sum: {
      newResults.push({
        id: newResults.length.toString(),
        input1: payload.input1.toString(),
        input2: payload.input2.toString(),
        action: type,
        result: (payload.input1 + payload.input2).toString(),
      });
      break;
    }
    case ActionType.divide: {
      newResults.push({
        id: newResults.length.toString(),
        input1: payload.input1.toString(),
        input2: payload.input2.toString(),
        action: type,
        result: (payload.input1 / payload.input2).toString(),
      });
      break;
    }
    case ActionType.remainder: {
      newResults.push({
        id: newResults.length.toString(),
        input1: payload.input1.toString(),
        input2: payload.input2.toString(),
        action: type,
        result: (payload.input1 % payload.input2).toString(),
      });
      break;
    }
    case ActionType.max: {
      newResults.push({
        id: newResults.length.toString(),
        input1: payload.input1.toString(),
        input2: payload.input2.toString(),
        action: type,
        result: (Math.max(payload.input1, payload.input2)).toString(),
      });
      break;
    }
  }
  return newResults;
}

const Calculations = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState(ActionType.sum);
  const [resulsts, dispatch] = useReducer(reducer, []);

  function calculate() {
    dispatch({
      type: operation,
      payload: {
        input1: Number(input1),
        input2: Number(input2),
      },
    });
  }

  return (
    <div className={styles.container}>
      <OperationPicker
        values={[ActionType.sum, ActionType.divide, ActionType.remainder, ActionType.max]}
        onSelect={(value) => {
          console.log('VALUE RECEIVED: ', value)
          const enumValue = value as ActionType;
          setOperation(enumValue);
        }}
        selected={operation}
      />
      <div className={styles.inputDiv}>
        <CustomInput
          value={input1}
          placeholder={'Input first value'}
          onInput={(text) => {
            setInput1(text);
          }}
        />
        <CustomInput
          value={input2}
          placeholder={'Input second value'}
          onInput={(text) => {
            setInput2(text);
          }}
        />
        <CustomButton text={'Calculate'} onPress={calculate} />
      </div>
      <div>
        <OperationTable
          headers={['Input1', 'Input2', 'Action', 'Result']}
          data={resulsts}
        />
      </div>
    </div>
  )
}

export default Calculations;
