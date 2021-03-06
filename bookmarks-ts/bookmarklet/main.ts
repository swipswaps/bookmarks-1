declare function require(path: string): any;

function isLocal(host: string) {
    return host === '127.0.0.1' || host === 'localhost'
}

let rpc_host = window['rpc_host']
if (!rpc_host && '8080' === window.location.port && isLocal(window.location.hostname))
    window['rpc_host'] = 'http://127.0.0.1:5010'

import * as Vue from 'vue'

let app = require('./App.vue')

let run
window['run'] = run = function(config) {
    app.config(config)
    new Vue(app).$mount('#app')
}

let config = window['run_config']
config && run(config)
