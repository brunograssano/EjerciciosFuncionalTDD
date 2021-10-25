import { wordCount } from '../src/exercise4';

describe('wordCount', function() {
  it('Count empty sequence.', () => {
    const countedWords = wordCount('');
    expect(countedWords).toEqual({});
  });

  it('Count spaces sequence.', () => {
    const countedWords = wordCount('  ');
    expect(countedWords).toEqual({});
  });

  it('Count one of each.', () => {
    const countedWords = wordCount('one of each');
    expect(countedWords.one).toEqual(1);
    expect(countedWords.of).toEqual(1);
    expect(countedWords.each).toEqual(1);
  });

  it('Count multiple occurrences.', () => {
    const countedWords = wordCount('one fish two fish red fish blue fish');
    expect(countedWords.one).toEqual(1);
    expect(countedWords.fish).toEqual(4);
    expect(countedWords.two).toEqual(1);
    expect(countedWords.red).toEqual(1);
    expect(countedWords.blue).toEqual(1);
  });

  it('Count multiple occurrences ignoring case.', () => {
    const countedWords = wordCount('go Go GO');
    expect(countedWords.go).toEqual(3);
  });
});
