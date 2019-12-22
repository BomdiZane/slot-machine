import Popup from './index';

describe('Popup component:', () => {
	const popup = shallow(<Popup  />);

	it('should match snapshot', () => expect(popup).toMatchSnapshot());
});
