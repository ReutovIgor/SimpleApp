import { render, fireEvent, screen } from '@testing-library/react'
import OperationPicker from '../OperationPicker';


describe('Operation Picker tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('Operation Picker is rendered', () => {
    render(<OperationPicker values={[1,2,3,4]}/>);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('Operation Picker clicks', () => {
    const mockHandler = jest.fn();
    render(<OperationPicker values={[1,2,3,4]} onSelect={mockHandler}/>);
    fireEvent.click(screen.getByDisplayValue('1'), {taget: {value: 1}});
    expect(mockHandler).toHaveBeenCalledWith('1');
  });
});
