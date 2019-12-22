import Deployment from '../../pages/deployment';

describe('Deployment component:', () => {
	const deployment = shallow(<Deployment />);

	it('should match snapshot', () => expect(deployment).toMatchSnapshot());
});
