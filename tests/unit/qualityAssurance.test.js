import QualityAssurance from '../../pages/qualityAssurance';

describe('QualityAssurance component:', () => {
	const qualityAssurance = shallow(<QualityAssurance />);

	it('should match snapshot', () => expect(qualityAssurance).toMatchSnapshot());
});
