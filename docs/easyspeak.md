---
title: Zip EasySpeak
sidebar: false
---

## Zip EasySpeak & EasySpeakAI⚡️

**Zip EasySpeak** is a free, open-source, and fully customizable Augmentative and Alternative Communication (AAC) dashboard. Designed for accessibility and ease of use, it runs directly in your browser and works offline, making it a reliable voice for anyone, anywhere. **EasySpeakAI** introduces some additional features which are listed below in _italics_.

Access Easy Speech by visiting [https://easyspeak.zipsolutions.org](https://easyspeak.zipsolutions.org)

Access Easy Speech AI by visiting [https://easyspeakai.zipsolutions.org](https://easyspeakai.zipsolutions.org)

Read the [getting started instructions here](/easyspeakguide.md).

### 🌟 Key Features

#### 🗣️ Powerful Communication

* **Two Interaction Modes:**

  * **Direct Mode:** Touching a button speaks the phrase immediately. Great for quick requests.

  * **Sentence Builder:** Construct full sentences in a "Sentence Strip" at the top (`I` + `Want` + `Apple`) before speaking them all at once.

* **Natural Voices:** Uses your device's built-in high-quality text-to-speech engines.

* **Offline Capable:** Works without an internet connection once loaded.

* **_Prediction using AI:_** _EasySpeakAI will give three suggestions to predict what you are saying using an offline LLM Model. This is run on your device so fully private._

* **_Location & Time Predictions:_** _The same AI engine will improve predictions using a location drop down and the time of day. This can be disabled in the settings._

* **_QWERTY Keyboard:_** _EasySpeakAI has the addition of a QWERTY Keyboard which allows you to write out words and phrases, with the addition of the prediction engine_

#### 🎨 Fully Customizable

* **Visual Editor:** Easily add, edit, or delete buttons and pages.

* **Symbol Search:** Integrated search (powered by OpenSymbols & ARASAAC) lets you find thousands of AAC symbols instantly.

* **Image Support:** Use Emojis or upload/search for custom images. Images are saved **offline** into your backup file.

* **Smart Linking:** Create "Linked Pages" to guide grammar flow (e.g., clicking "I" automatically opens the "Action Words" page).

#### 🔒 Secure & Portable

* **Admin PIN:** Lock the editing and settings menus to prevent accidental changes.

* **Backup & Restore:** Save your entire board to a single file.

* **Merge Import:** Share single pages with others (e.g., a teacher sharing a "Science Class" page) without overwriting your whole board.

### 🤖 Build Pages Faster with AI

Don't want to build pages from scratch? We have created a custom **Gemini Gem** that can generate complete, color-coded AAC pages for you in seconds.

#### How to use it:

1. Open the [**Zip EasySpeak Page Generator**](https://gemini.google.com/gem/1drrkS7r6KfA8e8STBegFb9JrZ8tvo1ZH?usp=sharing).

2. Ask for a topic (e.g., *"Make me a page for a trip to the Zoo"*).

3. The AI will generate a `.json` code block.

4. Copy that code into a text file (save it as `zoo.json`).

5. In Zip EasySpeak, go to **Settings > Data** and use **"Import Page (Merge)"**.

Use this tool to paste in your JSON code block and then save it to your computer

<template>
  <div class="json-box">
    <textarea v-model="jsonInput" placeholder="Paste JSON here..."></textarea>
    <div class="controls">
      <input v-model="fileName" placeholder="filename.json" />
      <button @click="download">Download</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const jsonInput = ref('')
const fileName = ref('data.json')

const download = () => {
  try {
    JSON.parse(jsonInput.value)
    const blob = new Blob([jsonInput.value], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName.value.includes('.') ? fileName.value : fileName.value + '.json'
    a.click()
    URL.revokeObjectURL(url)
  } catch (e) {
    alert("Invalid JSON!")
  }
}
</script>

<style scoped>
.json-box { margin: 20px 0; border: 1px solid #eaecef; padding: 20px; border-radius: 8px; }
textarea { width: 100%; height: 200px; font-family: monospace; margin-bottom: 10px; }
.controls { display: flex; gap: 10px; }
button { background: #3eaf7c; color: white; border: none; padding: 5px 15px; border-radius: 4px; cursor: pointer; }
</style>

### 📂 Community Resources

We maintain a library of pre-made pages and board layouts to help you get started quickly. You can download specific topic pages and import them directly into your app.

👉 [**Access the Resource Library (Google Drive)**](https://drive.google.com/drive/folders/1eWk1rXfbYEVQnplz8kcrksy-G6VLV7Dz?usp=sharing)

### 🛠 Technical Details

* **PWA Ready:** Installable on iPad, Chromebook, Android, and Desktop.

* **Privacy Focused:** No data is sent to our servers. Your board lives on your device. Remember to back it up!

* **Open Source:** Built with React and Vite.