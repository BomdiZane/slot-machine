import Agile from '../../pages/agile';

describe('Agile component:', () => {
	const agile = shallow(<Agile />);

	it('should match snapshot', () => expect(agile).toMatchSnapshot());
});
