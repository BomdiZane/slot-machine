import DataFormats from '../../pages/dataFormats';

describe('DataFormats component:', () => {
	const dataFormats = shallow(<DataFormats />);

	it('should match snapshot', () => expect(dataFormats).toMatchSnapshot());
});
