import {build} from 'esbuild';
import {resolve} from 'node:path';
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,sourcemap:false,outfile:'../site.js',format:'iife',target:['es2020'],alias:{'$sdk':resolve('src/standalone-sdk.ts'),'$wabi-web-components':resolve('src/standalone-components.tsx')},define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
