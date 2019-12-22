import Cloud from '../../pages/cloud';

describe('Cloud component:', () => {
	const cloud = shallow(<Cloud />);

	it('should match snapshot', () => expect(cloud).toMatchSnapshot());
});
