import Button from './index';

describe('Button component:', () => {
	const button = shallow(<Button />);
	it('should match snapshot', () => expect(button).toMatchSnapshot());
});
