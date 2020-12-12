const cazPages = require('..')

// TODO: Implement module test
test('caz-pages', () => {
  expect(cazPages('w')).toBe('w@zce.me')
  expect(cazPages('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => cazPages(100)).toThrow('Expected a string, got number')
})
