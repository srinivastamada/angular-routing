import { NoPageModule } from './no-page.module';

describe('NoPageModule', () => {
  let noPageModule: NoPageModule;

  beforeEach(() => {
    noPageModule = new NoPageModule();
  });

  it('should create an instance', () => {
    expect(noPageModule).toBeTruthy();
  });
});
