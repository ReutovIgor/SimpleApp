import { render, fireEvent, screen } from '@testing-library/react'
import Calculations from '../Calculations';


describe('Calculations tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('Calculations is rendered', () => {
    render(<Calculations/>);
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
    expect(screen.getByText('MAX')).toBeInTheDocument();
  });

  it('Calculations inputs are called', () => {
    render(<Calculations/>);
    fireEvent.change(screen.getByPlaceholderText('Input first value'), {target: {value: '5'}});
    fireEvent.change(screen.getByPlaceholderText('Input second value'), {target: {value: '10'}});
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });

  it('Calculations calculate is called with + operation', () => {
    render(<Calculations/>);
    fireEvent.change(screen.getByPlaceholderText('Input first value'), {target: {value: '5'}});
    fireEvent.change(screen.getByPlaceholderText('Input second value'), {target: {value: '10'}});
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.queryAllByText('5').length).toEqual(1);
    expect(screen.queryAllByText('10').length).toEqual(1);
    expect(screen.queryAllByText('+').length).toEqual(2);
    expect(screen.queryAllByText('15').length).toEqual(1);
  });

  it('Calculations calculate is called with / operation', () => {
    render(<Calculations/>);
    fireEvent.change(screen.getByPlaceholderText('Input first value'), {target: {value: '5'}});
    fireEvent.change(screen.getByPlaceholderText('Input second value'), {target: {value: '10'}});
    fireEvent.click(screen.getByDisplayValue('/'),{taget: {value: '/'}});
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.queryAllByText('5').length).toEqual(1);
    expect(screen.queryAllByText('10').length).toEqual(1);
    expect(screen.queryAllByText('/').length).toEqual(2);
    expect(screen.queryAllByText('0.5').length).toEqual(1);
  });

  it('Calculations calculate is called with % operation', () => {
    render(<Calculations/>);
    fireEvent.change(screen.getByPlaceholderText('Input first value'), {target: {value: '5'}});
    fireEvent.change(screen.getByPlaceholderText('Input second value'), {target: {value: '10'}});
    fireEvent.click(screen.getByDisplayValue('%'),{taget: {value: '%'}});
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.queryAllByText('5').length).toEqual(2);
    expect(screen.queryAllByText('10').length).toEqual(1);
    expect(screen.queryAllByText('%').length).toEqual(2);
  });

  it('Calculations calculate is called with MAX operation', () => {
    render(<Calculations/>);
    fireEvent.change(screen.getByPlaceholderText('Input first value'), {target: {value: '5'}});
    fireEvent.change(screen.getByPlaceholderText('Input second value'), {target: {value: '10'}});
    fireEvent.click(screen.getByDisplayValue('MAX'),{taget: {value: 'MAX'}});
    fireEvent.click(screen.getByText('Calculate'));
    expect(screen.queryAllByText('5').length).toEqual(1);
    expect(screen.queryAllByText('10').length).toEqual(2);
    expect(screen.queryAllByText('MAX').length).toEqual(2);
  });
});
