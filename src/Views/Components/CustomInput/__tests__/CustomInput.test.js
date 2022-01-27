import { render, fireEvent, screen } from '@testing-library/react'
import CustomInput from '../CustomInput';


describe('Custom Input tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('CustomInput is rendered', () => {
    render(<CustomInput placeholder={'placeholder'}/>);
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  it('CustomInput is clicked', () => {
    const onInputMock = jest.fn();
    render(<CustomInput placeholder={'placeholder'} onInput={onInputMock} />);
    fireEvent.change(screen.getByPlaceholderText('placeholder'), {target: {value: 3}});
    expect(onInputMock).toHaveBeenCalledWith('3');
  })
});
