import Reel from './index';

describe('Reel component:', () => {
  const reel = shallow(<Reel />);
  it('should match snapshot', () => expect(reel).toMatchSnapshot());
});
