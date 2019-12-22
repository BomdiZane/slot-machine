import SwitchButton from './index';

describe('SwitchButton component:', () => {
	const switchButton = shallow(<SwitchButton />);

	it('should match snapshot', () => expect(switchButton).toMatchSnapshot());
});
