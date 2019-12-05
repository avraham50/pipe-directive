import { PipeSayHelloPipe } from './pipe-say-hello.pipe';

describe('PipeSayHelloPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeSayHelloPipe();
    expect(pipe).toBeTruthy();
  });
});
