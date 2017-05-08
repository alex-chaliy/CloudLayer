# CloudLayer
Music Player • Typescript

![CloudLayer](./docs_src/img/cloud-logo--128.png)

> ! npm-package `typescript` must be globally installed (package.json uses `tsc` command)
	<br>
	! npm-package `nodemon` must be globally installed (package.json uses `nodemon` command)

## How to run the project (running + building, with watching for both)
```bash
npm start
```

## Build .ts files
```bash
npm run build
```
## Build .ts files & Watching
```bash
npm run build-watching
```


<br> <br> <br>
# Error fixes - how did I do these

• error TS2307: Cannot find module 'fs' <br>
npm install @types/node --save-dev <br>
http://stackoverflow.com/a/42435099

• run many commands concurrently -in- the same package.json script <br>
npm i concurrently --save-dev <br>
"start": " concurrently --kill-others \"npm run build-watching\" \"npm run server-watching\" ", <br>
http://stackoverflow.com/a/30950298

• error TS2339: Property 'Server' does not exist on type 'typeof "http"' <br>

import * as _http from 'http'; <br>
let http:any = _http; <br>

http://stackoverflow.com/a/18085870