const { wordCount } = require('../src/exercise4');

const assert = require('assert');

describe('wordCount', function() {
  it('Count no sequence.', () => {
    const countedWords = wordCount();
    assert.equal(countedWords, null);
  });

  it('Count empty sequence.', () => {
    const countedWords = wordCount('');
    assert.equal(countedWords, null);
  });

  it('Count spaces sequence.', () => {
    const countedWords = wordCount('  ');
    assert.equal(countedWords, null);
  });

  it('Count one of each.', () => {
    const countedWords = wordCount('one of each');
    assert.equal(countedWords.one, 1);
    assert.equal(countedWords.of, 1);
    assert.equal(countedWords.each, 1);
  });

  it('Count multiple occurrences.', () => {
    const countedWords = wordCount('one fish two fish red fish blue fish');
    assert.equal(countedWords.one, 1);
    assert.equal(countedWords.fish, 4);
    assert.equal(countedWords.two, 1);
    assert.equal(countedWords.red, 1);
    assert.equal(countedWords.blue, 1);
  });

  it('Count multiple occurrences ignoring case.', () => {
    const countedWords = wordCount('go Go GO');
    assert.equal(countedWords.go, 3);
  });
});
