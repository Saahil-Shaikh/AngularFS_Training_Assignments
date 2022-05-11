import { GradepipePipe } from './gradepipe.pipe';

describe('GradepipePipe', () => {

  let pipe:GradepipePipe;

  beforeEach(() => {
    pipe = new GradepipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('If input grade is "1" then output grade must be "Outstanding"', () => {
    const result = pipe.transform("1");
    expect(result).toBe("Outstanding");
  });

  it('If input grade is "2" then output grade must be "Excellent"', () => {
    const result = pipe.transform("2");
    expect(result).toBe("Excellent");
  });

  it('If input grade is "3" then output grade must be "Good"', () => {
    const result = pipe.transform("3");
    expect(result).toBe("Good");
  });

  it('If input grade is empty then output grade will be empty as well', () => {
    const result = pipe.transform("");
    expect(result).toBe("");
  });

  it('If input grade is "5" which doesnt defines any grade then output grade will be "Invalid Grade"', () => {
    const result = pipe.transform("5");
    expect(result).toBe("Invalid Grade");
  });

  it('If input grade is a textual value then output will be "Invalid Grade"', () => {
    const result = pipe.transform("H");
    expect(result).toBe("Invalid Grade");
  });

});

