import {browser} from './testkit/feature-test'

describe('La page des jokes', () => {
  beforeAll(async () => {
    await browser.visit('/')
  })

  test('affiche une joke', () => {
    expect(browser.text('#joke')).toBe('Not a funny joke')
  })
})
