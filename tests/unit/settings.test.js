import Settings from '../../pages/Settings';

describe('Settings component:', () => {
  const settings = shallow(<Settings />);
  it('should match snapshot', () => expect(settings).toMatchSnapshot());
});
