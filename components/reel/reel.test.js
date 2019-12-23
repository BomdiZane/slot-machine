import Reel from './index';
import Controller from './controller';

describe('Reel:', () => {
  describe('Reel component:', () => {
    const reel = shallow(<Reel />);
    it('should match snapshot', () => expect(reel).toMatchSnapshot());
  });

  describe('Controller component:', () => {
    const controller = shallow(<Controller />);
    it('should match snapshot', () => expect(controller).toMatchSnapshot());
  });
});
