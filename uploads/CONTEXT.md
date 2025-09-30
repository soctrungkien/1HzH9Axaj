<!-- IGNORE THIS, CONTEXT.MD TEMPLATE BY @SyanicXD (YouTube) -->

## 🔧 Mod Info

- **Mod Name:** `Your Mod Name`
- **Mod ID:** `yourmodid`
- **Author:** `Your Name`
- **Package Name:** `com.yourname.yourmodid`
- **Minecraft Version:** `1.21.1`
- **Fabric Loader Version:** `0.16.12`
- **Yarn Mappings:** `1.21.1+build.3`
- **Fabric API Version:** `0.115.4+1.21.1``
- **Java Version (JDK):** `21`
- **Mod Type:** `client`, `server`, or `both`

---

## 🧠 Mod Functionality

> **Describe what the mod should do. Be as detailed and specific as possible.**

---

## 📦 Output Instructions

The AI must:

- ✅ List all **Java source files**  
  - Show full relative paths (e.g., `src/main/java/com/...`)  
  - Give a one-line description of each file's purpose

- ✅ Write **full, working Java code** for every file  
  - No placeholders, stubs, or missing logic  
  - Fully import-ready and compilable

- ✅ Provide a valid, working `fabric.mod.json`

- ✅ Register all components correctly:
  - Items, blocks, screens, overlays, particles, keybinds, etc.  
  - Client or server init logic as appropriate

- ✅ Include all required **import statements** and **annotations**

---

## 🎨 Assets (If Applicable)

If assets are needed, AI must:

- 📂 **List all required assets**, including:
  - Textures (`.png`)
  - Lang files (`lang/en_us.json`)
  - Models and blockstates (`.json`)
  - Sounds or GUI elements

- 📄 **Provide full content** and **exact paths** for each file:
  - Example: `src/main/.../exampleMixin.java`
  - Example: `src/main/resources/assets/[modid]/textures/item/example_item.png`
  - Example: `src/main/resources/assets/[modid]/lang/en_us.json`

---

## 📘 Documentation Output

Also generate a brief documentation file and save it as:

> 📁 `docs/OUTPUT.md`

This file must:

- ✅ Explain what the mod does  
- ✅ Summarize all the components (classes, assets, events)  
- ✅ Describe where everything is registered and how it works  
- ✅ Be written for the user to understand how the mod is structured  
- ✅ Use Markdown formatting (headings, bullets, code blocks)

---

## ⚙️ Optional Features

If applicable, include:

- Mixin setup  
- Config file support (Cloth Config or JSON)  
- Command registration  
- Client/server networking  
- Runtime environment checks  
- Shader or render layer support

---

## ❌ Rules

- ❌ Do not skip any code  
- ❌ Do not use vague notes like “implement this later”  
- ❌ Do not generate placeholder files or comments  
- ✅ Output must be **complete and build-ready** from the start