const Letter = require('../lib/Letter');

describe('Visibility', () => {
  it('Characters that are digits or letters should not be visible', () => {
    expect(new Letter('j').visible).toBe(false);
  });

  it('Correct guess makes character visible', () => {
    const letter = new Letter('j');
    const { visible } = letter;

    // Correct guess
    letter.guess('j');

    // letter wasn't originally visible
    expect(visible).toBe(false);

    // letter now visible
    expect(letter.visible).toBe(true);
  });

  it('Incorrect guess does not make character visible', () => {
    const letter = new Letter('j');
    const { visible } = letter;

    // Incorrect guess
    letter.guess('l');

    // letter wasnt originally visible
    expect(visible).toBe(false);

    // letter still not visible
    expect(letter.visible).toBe(false);
  });

  it('Should return the guessed character when using toString', () => {
    const letter = new Letter('j');

    letter.guess('j');

    expect(letter.toString()).toBe('j');
  });
});

describe('Letter class', () => {
  it("Characters that aren't digits or letters are instantly visible", () => {
    expect(new Letter('?').visible).toBe(true);
  });

  it('toString returns _ for letters', () => {
    expect(new Letter('a').toString()).toBe('_');
  });

  describe('guess', () => {
    it('Correct guess returns true', () => {
      expect(new Letter('j').guess('j')).toBe(true);
    });

    it('Incorrect guess returns false', () => {
      expect(new Letter('j').guess('l')).toBe(false);
    });
  });

  describe('getSolution', () => {
    it('returns character', () => {
      expect(new Letter('l').getSolution()).toBe('l');
    });
  });
});
