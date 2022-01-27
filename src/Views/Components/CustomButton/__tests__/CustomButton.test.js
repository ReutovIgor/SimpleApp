import { render, fireEvent, screen } from '@testing-library/react'
import CustomButton from '../CustomButton';

describe('Custom button tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('CustomButtom is rendered', () => {
    render(<CustomButton text={'Button'} />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('CustomButton is clicked', () => {
    const clickMock = jest.fn();
    render(<CustomButton text={'Button'} onPress={clickMock} />);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalled();
  })
});
