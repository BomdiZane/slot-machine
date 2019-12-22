import Slot from './index';

describe('Slot component:', () => {
  const slot = shallow(<Slot />);
  it('should match snapshot', () => expect(slot).toMatchSnapshot());
});
