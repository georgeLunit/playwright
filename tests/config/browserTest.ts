/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { newTestType } from '../folio/out';
import type { Browser, BrowserContextOptions, BrowserContext, Page } from '../../index';
import type { PlaywrightTestArgs } from './playwrightTest';
import type { ServerTestArgs } from './serverTest';
export { expect } from '../folio/out';

export type BrowserTestArgs = PlaywrightTestArgs & {
  browser: Browser;
  contextOptions: BrowserContextOptions;
  contextFactory: (options?: BrowserContextOptions) => Promise<BrowserContext>;
};

export const test = newTestType<BrowserTestArgs & ServerTestArgs>();
export const slowTest = newTestType<BrowserTestArgs & ServerTestArgs>();
export const proxyTest = newTestType<BrowserTestArgs & ServerTestArgs>();

// Context test guarantees an isolated context.
export type ContextTestArgs = BrowserTestArgs & {
  context: BrowserContext;
  page: Page;
};
export const contextTest = newTestType<ContextTestArgs & ServerTestArgs>();
