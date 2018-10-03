import browser from './browser-driver'
import app from './app-driver'

beforeAll(async () => {
  browser.start(1234)
  await app.start(1234)
})

afterAll(async () => {
  await app.stop()
})

export {browser}
