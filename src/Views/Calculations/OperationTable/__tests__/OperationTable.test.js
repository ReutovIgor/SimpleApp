import { render, fireEvent, screen } from '@testing-library/react'
import OperationTable from '../OperationTable';


describe('Operation Table tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('Operation Table is rendered', () => {
    render(<OperationTable headers={['header1', 'header2', 'header3', 'header4']} data={[]}/>);
    expect(screen.getByText('header1')).toBeInTheDocument();
    expect(screen.getByText('header2')).toBeInTheDocument();
    expect(screen.getByText('header3')).toBeInTheDocument();
    expect(screen.getByText('header4')).toBeInTheDocument();
  });

  it('Operation Table data is rendered', () => {
    const data = [{
      input1: 'input1',
      input2: 'input2',
      action: 'action',
      result: 'result',
    }]
    render(<OperationTable headers={['header1', 'header2', 'header3', 'header4']} data={data}/>);
    expect(screen.getByText('input1')).toBeInTheDocument();
    expect(screen.getByText('input2')).toBeInTheDocument();
    expect(screen.getByText('action')).toBeInTheDocument();
    expect(screen.getByText('result')).toBeInTheDocument();
  });
});
