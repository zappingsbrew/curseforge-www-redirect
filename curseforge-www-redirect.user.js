// ==UserScript==
// @name         CurseForge Legacy → WWW Redirect
// @namespace    https://github.com/zappingsbrew/curseforge-www-redirect
// @version      1.0.0
// @description  Redirect all CurseForge subdomains to www.curseforge.com (pure wildcard)
// @author       Zappingsbrew & ChatGPT
// @match        https://*.curseforge.com/*
// @icon         https://www.google.com/s2/favicons?sz=128&domain=curseforge.com
// @updateURL    https://github.com/zappingsbrew/curseforge-www-redirect/releases/latest/download/curseforge-www-redirect.user.js
// @downloadURL  https://github.com/zappingsbrew/curseforge-www-redirect/releases/latest/download/curseforge-www-redirect.user.js
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

/*!
 * MIT License
 *
 * Copyright (c) 2026 Zappingsbrew
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function () {
    'use strict';

    const url = new URL(location.href);

    if (url.hostname === "www.curseforge.com") return;

    const target = "https://www.curseforge.com" + url.pathname + url.search + url.hash;

    location.replace(target);
})();
