import Body from './body';
import ScrollToTop from './scrollToTop';

describe('Body:', () => {
  describe('Main component:', () => {
    const body = shallow(<Body />);
    it('should match snapshot', () => expect(body).toMatchSnapshot());
  });

  describe('ScrollToTop component:', () => {
    const scrollToTop = shallow(<ScrollToTop />);
    it('should match snapshot', () => expect(scrollToTop).toMatchSnapshot());
  });
});
