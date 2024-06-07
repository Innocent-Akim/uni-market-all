console.log('API Core Starting...');

import * as path from 'path';
const currentWorkingDirectory = process.cwd();
const envPaths = ['../../.env', '../../.env.local'];
const envPath = path.resolve(currentWorkingDirectory, envPaths[0]);
const envLocalPath = path.resolve(currentWorkingDirectory, envPaths[1]);
import * as dotenv from 'dotenv';
dotenv.config({ path: envPaths });


import {bootstrap} from '@uni/bootstrap'
import { devConfig } from '@uni/databases'


  bootstrap(devConfig).catch(()=>{
   console.log("server start:dev...")
 }).catch(()=>{})