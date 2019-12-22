import Main from './index';

describe('Home:', () => {
  describe('Main component:', () => {
    const main = shallow(<Main />);
    it('should match snapshot', () => expect(main).toMatchSnapshot());
  });
});
