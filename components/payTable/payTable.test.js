import PayTable from './index';

describe('PayTable component:', () => {
  const payTable = shallow(<PayTable />);
  it('should match snapshot', () => expect(payTable).toMatchSnapshot());
});
