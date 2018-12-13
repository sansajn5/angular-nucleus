import { NucleusModule } from './nucleus.module';

describe('NucleusModule', () => {
  let nucleusModule: NucleusModule;

  beforeEach(() => {
    nucleusModule = new NucleusModule();
  });

  it('should create an instance', () => {
    expect(nucleusModule).toBeTruthy();
  });
});
