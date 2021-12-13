import { DurationPipe } from './duration.pipe';

//Custom Pipe this spec.ts is used for unit testing
describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
