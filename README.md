# CurseForge Legacy → WWW Redirect

A simple Tampermonkey userscript that automatically redirects all `*.curseforge.com/*` subdomains to `www.curseforge.com/*`, preserving the full path, query, and hash.

---

## ⚠️ Note

This script is purely a URL normalization utility. It does not modify page content, inject elements, or collect any data. It only redirects CurseForge subdomains to the official `www.curseforge.com` domain.

This is a **wildcard redirect**, meaning it does not rewrite or interpret project structure — it only changes the domain.

---

## ✨ Features

* Redirects all `*.curseforge.com/*` subdomains to `www.curseforge.com/*`
* Preserves full path, query strings, and hash fragments
* Works across all CurseForge sections (Minecraft, WoW, Sims, etc.)
* Runs instantly on page load (no flicker)
* Lightweight and dependency-free
* True wildcard behavior (no hardcoded routing rules)

---

## 🧠 How It Works

The script detects any URL under:

```
https://*.curseforge.com/
```

and rewrites it into:

```
https://www.curseforge.com/
```

while preserving everything after the domain.

### Example:

```text
https://minecraft.curseforge.com/projects/jei
→ https://www.curseforge.com/projects/jei
```

```text
https://legacy.curseforge.com/minecraft/mods/jei
→ https://www.curseforge.com/minecraft/mods/jei
```

---

## ⚠️ Important Behavior

CurseForge uses **category-based routing** on the main domain.
This script does **not** fix or remap old project structures — it only normalizes domains.

Most modern CurseForge links will work correctly after redirect, but some legacy deep links may not map perfectly.

---

## ⚙️ Installation

1. Install **Tampermonkey**:
   [https://www.tampermonkey.net/](https://www.tampermonkey.net/)

2. Install via script repositories:

* Greasy Fork:
  [https://greasyfork.org/en/scripts/582973-curseforge-legacy-www-redirect](https://greasyfork.org/en/scripts/582973-curseforge-legacy-www-redirect)

* OpenUserJS:
  [https://openuserjs.org/scripts/Zappingsbrew/CurseForge_Legacy_%E2%86%92_WWW_Redirect](https://openuserjs.org/scripts/Zappingsbrew/CurseForge_Legacy_%E2%86%92_WWW_Redirect)

3. Or install manually:

* Copy the script from this repository
* Paste into a new Tampermonkey script
* Save and enable

---

## 🔗 Links

* GitHub: [https://github.com/zappingsbrew/curseforge-www-redirect](https://github.com/zappingsbrew/curseforge-www-redirect)
* Greasy Fork: [https://greasyfork.org/en/scripts/582973-curseforge-legacy-www-redirect](https://greasyfork.org/en/scripts/582973-curseforge-legacy-www-redirect)
* OpenUserJS: [https://openuserjs.org/scripts/Zappingsbrew/CurseForge_Legacy_%E2%86%92_WWW_Redirect](https://openuserjs.org/scripts/Zappingsbrew/CurseForge_Legacy_%E2%86%92_WWW_Redirect)

---

## 🎨 Assets

The favicon used in this userscript is sourced directly from CurseForge and is used solely for cosmetic identification in userscript managers (e.g. Tampermonkey icons). It does not affect functionality.

Favicon source:
[https://www.curseforge.com/favicon.ico](https://www.curseforge.com/favicon.ico)

---

## 🤖 Transparency & Credits

* **Userscript logic:** ChatGPT (GPT-5)
* **Publishing & maintenance:** Zappingsbrew
* **Documentation structure:** ChatGPT (GPT-5)

This script is purely a redirect utility and does not collect data, inject content, or modify page behavior beyond URL navigation.

---

## 🧾 License

This project is licensed under the [MIT License](https://github.com/zappingsbrew/curseforge-www-redirect/blob/main/LICENSE).

© 2026 Zappingsbrew
