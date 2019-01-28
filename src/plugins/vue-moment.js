// import something here
const moment = require('moment')
require('moment/locale/es')
require('moment/locale/ru')
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.use(require('vue-moment'), {
    moment
  })
}
