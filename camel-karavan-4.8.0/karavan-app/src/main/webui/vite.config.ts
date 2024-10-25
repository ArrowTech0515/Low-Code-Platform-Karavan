/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), viteTsconfigPaths()],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        host: '127.0.0.1',
        // this sets a default port to 3000, you can change this
        port: 3003,
        cors: {
            origin: '*', // Allows requests from any origin
            methods: ['GET', 'POST'], // Specifies allowed HTTP methods
            credentials: true // If you're using cookies or credentials
        },
        proxy: {
            '/public': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                secure: false,
            },
            '/ui': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                secure: false,
            },
            '/user': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                secure: false,
            },
        }
    }
})