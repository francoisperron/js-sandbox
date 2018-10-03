import Bundler from 'parcel-bundler'
import Path from 'path'
import http from 'http'

const file = Path.join(__dirname, '../index.html')
const options = {
  killWorkers: true,
  watch: false, // whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: false, // Enabled or disables caching, defaults to true
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  target: 'browser', // browser/node/electron, defaults to browser
  logLevel: 1, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (not supported in minified builds yet)
  detailedReport: false // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};
const bundler = new Bundler(file, options)
const server = http.createServer(bundler.middleware())

const app = {
  start: (port) => {
    return new Promise((resolve, reject) => {
      server
        .listen(port, () => resolve())
        .on('error', (err) => reject(err))
    })
  },
  stop: () => {
    return new Promise((resolve, reject) => {
      server
        .close(() => resolve())
        .on('error', (err) => reject(err))
    })
  }
}

export default app
