
/**
 * @sveltech/routify 0.0.0-development
 * File generated Tue Apr 14 2020 09:23:45 GMT+0200 (GMT+02:00)
 */

export const __version = "0.0.0-development"
export const __timestamp = "2020-04-14T07:23:45.459Z"

//buildRoutes
import { buildClientTree } from "C:/Users/jakob/sandbox/svelte/dev/svelte-filerouter/runtime/buildRoutes"

//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "meta": {
        "preload": false,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('./Splash.svelte').then(m => m.default)
    },
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}

export const {tree, routes} = buildClientTree(_tree)

