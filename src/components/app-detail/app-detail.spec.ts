import { AppDetail } from './app-detail';

describe('app-detail', () => {
  it('builds', () => {
    expect(new AppDetail()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppDetail();
      expect(component.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppDetail();
      component.name = 'quincy';
      expect(component.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppDetail();
      component.name = 'JOSEPH';
      expect(component.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppDetail();
      component.name = 'q';
      expect(component.formattedName()).toEqual('Q');
    });
  });
});
