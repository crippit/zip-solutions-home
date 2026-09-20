---
title: Slide'o'matic
sidebar: false
---
# Slide Visibility Scheduler

An elegant, automated Google Slides add-on developed by **ZipSolutions**. Take absolute control over your presentation delivery by scheduling individual slides to display or hide themselves based on custom-defined calendar dates.

---

## 🚀 Key Features

### 📅 Precision Date Targeting
* **Show On Date:** Select the exact start date for your slide's visibility window. The slide automatically unhides at the start of this day (`00:00:00`).
* **Hide After Date:** Define when the content should be retired. The slide automatically skips itself at the end of this day (`23:59:59`).

### ⚙️ Seamless Sidebar Integration
* **Persistent Panel UI:** Unlike modal pop-ups, the interactive sidebar anchors perfectly alongside your workspace. Select a slide, pick your dates, save, and jump to the next slide without losing focus.
* **Speaker Notes Storage:** Configurations are safely injected cleanly as a custom metadata string (`[DATES:YYYY-MM-DD|YYYY-MM-DD]`) directly inside your speaker notes. No external servers or tracking scripts required.

### 🤖 Intelligent Midnight Automation
* **Set and Forget:** Enable **Daily Auto-Check** to spawn a native Google Apps Script time-driven trigger.
* **Server-Side Checks:** The system scans your entire presentation deck every single night at midnight (local time) to run visibility evaluations completely in the background—even if your computer is completely turned off.
* **Manual Overrides:** Instantly refresh your slide rules during live sessions using the **Force Manual Scan Now** quick-action button directly inside your sidebar dashboard.

### 🎨 Native User Experience
* Styled entirely within the verified **ZipSolutions** design system, combining fluid UI/UX state interactions with performance analytics.
* Secure standalone client authentication structure ensuring absolute privacy.

---

## ⚖️ Terms of Service

**Last Updated: May 18, 2026**

Please read these Terms of Service ("Terms") carefully before activating the Slide Visibility Scheduler add-on ("Service") provided by ZipSolutions.

### 1. Acceptance of Terms
By installing and authorizing this add-on within your Google Workspace environment, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must remove the add-on immediately.

### 2. Description of Service
Slide Visibility Scheduler provides automated, scheduled masking and unmasking of Google Slides objects. Slide updates are performed locally or through background routines initiated within your native Google Account infrastructure.

### 3. Data Privacy & Execution Access
* **Zero External Data Storage:** ZipSolutions does not collect, monitor, transmit, or store your presentation contents, metadata, speaker notes, or structural layout files on external company servers.
* **Google Cloud Scope Clearances:** The add-on requests explicit access permissions to read presentation structures (`/auth/presentations`), process automated time intervals (`/auth/script.scriptapp`), and build UI frameworks (`/auth/script.container.ui`). This data remains strictly sandboxed within your authenticated Google environment.

### 4. System Limitations & Liability Disclaimer
* **Best-Effort Scheduling:** Automation routines run on Google Apps Script background trigger architectures. While designed to execute daily at approximately midnight, absolute execution timing is dependent on Google network engine availability.
* **"As-Is" Provisioning:** This tool is provided on an "as-is" and "as-available" basis. ZipSolutions shall not be held liable for any indirect, incidental, or consequential damages resulting from skipped material, presentation disruptions, hidden items during meetings, or missed chronological scheduling cycles.

### 5. Modification of Terms
ZipSolutions reserves the right to modify these structural terms at any time. Your continued deployment of the scheduler software following any revisions constitutes your binding acceptance of the updated legal policies.

---

*Powered by [ZipSolutions](https://zipsolutions.org)*
