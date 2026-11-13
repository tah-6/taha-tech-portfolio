# Portfolio Spec — Taha Irfan

Source of truth for the portfolio rebuild. Claude Code: read this whole file before changing anything. All site copy comes from here. Do not invent metrics, tools or features that are not written below. Leave anything marked TODO out of the UI and list it for Taha at the end of your work.

---

## 0. Decide before building (Taha, edit these)

- [ ] **Public email:** `taha.syed.irfan@gmail.com` or `irfans@uoguelph.ca`? (Pick one for the site.)
- [ ] **Phone number:** The current site shows (604) 652-9393 publicly. Recommendation: remove it, since bots scrape it. Keep email + LinkedIn + GitHub. Keep / remove?
- [ ] **Graduation:** The current site says April 2029. Other records say May 2029. Which is correct?
- [ ] **Haptic wearable:** The current site says "embedded C++ firmware" and "June 2025 – Present". Correct to the real language (C?) and dates (May 2025 – Aug 2025?).
- [ ] **TreeCleaner:** Keep only features that actually work. The current page claims "256-bit encryption" and "bank-grade security". Remove those if the app doesn't really do that.
- [ ] **Resume PDF:** Export from Overleaf → put at `/public/Taha_Irfan_Resume.pdf`.
- [ ] **Photos:** Add any project photos or screenshots to `/public/projects/<slug>/` (PCB renders, scope captures, prototype photos, terminal output).

---

## 1. Positioning

- **Name:** Taha Irfan
- **Headline:** Computer Engineering student building embedded firmware and hardware test systems.
- **Subline:** B.Eng Computer Engineering (Co-op) at the University of Guelph. Interested in embedded/firmware, hardware validation and test.
- **Availability badge:** "Open to co-op roles: Winter 2027 & Summer 2027" (small pill with a green dot).
- **Location:** Milton, ON
- **Links:** GitHub https://github.com/tah-6 · LinkedIn https://www.linkedin.com/in/taha-irfan-57547525a/ · Email (see §0)

---

## 2. Experience (reverse chronological)

### Sales Associate — Sunglass Hut
May 2026 – August 2026 · 4-month contract · In-store · Halton Hills, ON
- Ran in-store demos of Meta smart glasses and polarized lens technology. Explained features and Gen 1 vs Gen 2 differences that customers didn't know about.
- Turned technical product explanations into sales: ~$10k in total sales, ~$3k of that from Meta smart glasses.

### QA / Testing Intern — Moves (early-stage startup, ~4 people)
May 2026 – August 2026 · Remote
- Tested and helped design the company's social platform as part of a 4-person team.
- Edited Instagram Reels for the company in Premiere Pro.
- Ran manual test cases on the platform and reported the bugs to the lead developer. Bugs included notifications sent at the wrong time or not at all, chat rooms not appearing, no location found for chat rooms, and message filtering not working, which let anyone create rooms on a platform meant for trusted promoters.

### Stock Associate — Steve Madden
May 2023 – Present · Halton Hills, ON
- The store manager traced a weekly purse sales drop (~$9,000 → ~$4,000) to customers and staff not being able to find purses. Reorganized the purse inventory and labelled every location with the correct product codes so associates could find any purse quickly.
- When the in-store printer stopped working, I was the one who troubleshot and fixed the printing problems.
- Sales figures for the following period were not reported back to me, but it was clear that customers and staff could now find purses easily.

### Chair & Membership Development Coordinator — Guelph Engineering Society
Winter 2025 · Guelph, ON
- Chaired society meetings. Brought many viewpoints from across engineering disciplines together into one direction and made it digestible for a large group.
- Coordinated student-engagement initiatives and multidisciplinary team meetings.
- Developed strategies to increase membership participation and involvement.

### Also
- **YouTube channel (Winter 2026):** Ran a short-form automation channel, editing in CapCut. One Short reached ~10k views. Show this small, in an "Also" or "Beyond engineering" line, not as a main card.

---

## 3. Projects

Order: embedded/hardware first, then software. Mark the top 3 as **featured** on the home page.

### ★ HIL-Testbench — Hardware-in-the-loop test bench
May 2026 – Sep 2026 · GitHub: https://github.com/tah-6/HIL-Testbench
**Stack:** STM32 Nucleo-F446RE, C (firmware), Python + pyserial, UART, Excel
- C firmware on an STM32 Nucleo-F446RE communicates over UART with a Python (pyserial) host that drives and logs tests.
- Test results are exported and charted in Excel.
- Measured on-chip GPIO toggle latency at 642 ns, identical across 1,000 trials and again across 10,000 trials, with interrupts disabled during the measurement window.
- With interrupts enabled, 6 of 10,000 trials (0.06%) ran long, up to about 1392 ns. The outliers were spaced one CPU cycle apart, consistent with the 1 ms SysTick interrupt firing mid-measurement.
- Measured UART round-trip latency at 115200 baud: mean 3816 µs (min 3079 µs, max 4879 µs). Most of the delay is byte transmit time, not MCU processing.
- Confirmed the transmit-time explanation by comparing PING and TOGGLE replies: measured a 2672 µs average difference (439 µs std. dev.) against roughly 2 ms predicted from about 86.8 µs per byte.
- Pass threshold set at 700–800 ns, above the 642 ns worst case measured.
- The bench runs one test case: response validation.

### ★ 16-bit Single-Cycle CPU
Jan 2026 – Apr 2026 · Course project
**Stack:** VHDL, Vivado, testbench simulation
- Designed a 16-bit single-cycle CPU in VHDL.
- Wrote a VHDL testbench in Vivado that checked each instruction to confirm it worked as intended.
- Implements 8 instructions: BNE, SUB, ADD, LW, SW, OR, AND, ADDI.

### ★ Wearable Haptic Navigation System
May 2025 – Aug 2025 (confirm, see §0) · Independent project
**Stack:** Microcontroller firmware (language: confirm, see §0), Bluetooth, motor driver circuit, KiCad (2-layer PCB), soldering
- Wearable that guides the user with vibration patterns instead of a phone screen.
- Designed the architecture: smartphone GPS/compass data sent over Bluetooth to the wearable.
- Wrote firmware that turns direction data into haptic patterns. Designed the motor driver circuit for vibration control.
- Hand-soldered and integrated the components into a working prototype. Designed a 2-layer PCB in KiCad (Gerbers ready, not yet fabricated).

### Temperature-Sensing PCB — In progress
Fall 2026 · Personal project
**Stack:** KiCad, STM32, I2C temperature sensor
- Designing a custom PCB around an STM32 that reads an I2C temperature sensor.
- Show with an "In progress" tag.

### beets — Large-Scale Software Architecture team project (ENGG*4450)
Fall 2026 · Team of students (Group 07)
**Stack:** Python (beets open-source codebase), Git/GitHub, Jira, UML
- Working on change requests to the beets open-source music library manager.
- Set up the team's Jira board (Scrum/Kanban workflow) and produced the use case diagram. Contributed to the UML class diagram of the codebase.
- The team's two bug fixes have been merged and tested.

### CourseLink
Jan 2025 – Apr 2025
**Stack:** Java, JavaFX
- Hand-coded a role-based desktop app in Java and JavaFX with Admin, Faculty and Student dashboards.
- Implemented login, session management and role-based access so each role sees only its own features.
- Loaded records from CSV files, organizing the logic across dedicated classes with object-oriented design.

### Internship & Job Tracker
Web app · Live: https://uofg-job-tracker.vercel.app · GitHub: https://github.com/tah-6/uofg-job-tracker
**Stack:** Next.js (React), TypeScript, Tailwind CSS, Vercel
- Client-side app to organize and track co-op/internship applications: add, edit, filter, and export/import entries (CSV/JSON).
- Designed and built it from scratch, including the component architecture, localStorage persistence, import/export utilities, responsive dark-mode UI, and Vercel deployment.

### TreeCleaner
Web app · Live: https://saasprojecttreecleaner.vercel.app
**Stack:** Next.js (React), Tailwind CSS, Vercel
- Subscription manager that tracks recurring payments and alerts users before free trials convert.
- Keep only features that really work (see §0).

### Automatic Plant Watering System
Sep 2023 – Jan 2024 · Academic project
**Stack:** Bare-metal embedded firmware, sensors
- Autonomous system that monitors soil/environment and controls watering without manual input.
- Bare-metal firmware built around a finite state machine, with real-time sensor sampling and control logic.
- Added fault detection and error handling so the system recovers safely.

---

## 4. Education

**University of Guelph** — B.Eng Computer Engineering (Co-op)
Sep 2024 – Expected 2029 (month: see §0) · Guelph, ON
Relevant coursework: Computer Organization & Architecture, Electric Circuits, Data Structures & Algorithms, Discrete Math, Large-Scale Software Architecture, Optimization for Engineers

## 5. Certifications

- SOLIDWORKS CSWA (Certified SOLIDWORKS Associate). Badge: https://www.credly.com/earner/earned/badge/c1bf5cf4-7d66-4547-bee3-f53a3b169bcf
- Cisco IT Essentials (Cisco Networking Academy)

## 6. Skills (grouped, no progress bars or percentages)

- **Languages:** C, Python, Java, VHDL, TypeScript, MATLAB, SQL (basic)
- **Embedded & hardware:** STM32 (Nucleo-F446RE), UART, I2C, bare-metal firmware, finite state machines, VHDL testbenches, KiCad PCB design, soldering, PC building and hardware troubleshooting, SOLIDWORKS
- **Lab tools:** Oscilloscope, multimeter, logic analyzer, Xilinx ISE
- **Software & workflow:** Git/GitHub, Linux, Makefiles, Next.js/React, Tailwind CSS, Vercel, Jira, Scrum/Kanban, Microsoft 365 (Excel, PowerPoint, SharePoint)
- **Media:** Premiere Pro, CapCut

---

## 7. Site structure

Content lives in ONE typed data file (e.g. `src/data/content.ts`). Every page renders from it, so future updates mean editing one file.

**Pages**
1. `/` **Home**, in this order:
   1. Hero: headline, subline, availability pill, two buttons: **Email me** (primary) + **View resume** (secondary). Small row of GitHub / LinkedIn icons.
   2. Featured projects: 3 large cards → link to detail pages. "All projects →" link.
   3. Experience: **Flip Deck** (see §11). One card per experience, shown as a single stack the visitor flips through.
   4. Skills: grouped chips.
   5. Education + certifications.
   6. Contact block (see §8).
2. `/projects`: all projects, filter tabs: All · Embedded & Hardware · Software.
3. `/projects/[slug]`: detail page per project: title, dates, stack chips, links (GitHub / Live), overview, what I built, how, results, images. Prev/next project links at the bottom.
4. `/resume`: embedded PDF + Download button.

Remove: the "Chapter 1–6" structure, the inspirational quotes, duplicated Engineering Society sections, glow effects and gradients.

---

## 8. Contact must be obvious everywhere

- **Sticky header** on every page: name on the left. Nav links: Projects, Experience, Resume. On the right, two pill buttons like Cursor's "Contact" + "Download": **Contact** (outline) and **Resume** (dark filled).
- **Hero:** "Email me" primary button.
- **Copy email button:** clicking copies the address and shows a small "Copied" toast; also offers a mailto link.
- **Contact section** at the bottom of Home: one sentence ("Looking for Winter/Summer 2027 co-op roles in embedded, firmware and validation. The fastest way to reach me is email."), plus email, LinkedIn, GitHub and the resume.
- **Footer** on every page with the same links (Cursor-style multi-column footer: Pages / Projects / Connect).
- **Mobile:** header collapses to name + a "Contact" button + menu icon.

---

## 9. Design brief: in the style of cursor.com (inspired by it, not a copy)

Look and feel: calm, editorial, product-like. Lots of whitespace, left-aligned text, almost no color. The content does the work.

- **Colors (light, default):** warm off-white background (~`#F7F7F4`), near-black text (~`#26251E`), muted gray secondary text (~`#6F6E69`), hairline borders (~`#E6E5E0`), card surface slightly darker than the background (~`#F0EFEA`). Use ONE accent sparingly (e.g. a muted orange or green) only for the availability dot and link hovers.
- **Dark mode:** near-black warm background (~`#14120B`), off-white text. Respect system preference, plus a toggle in the header.
- **Type:** a clean grotesk sans (Geist Sans or Inter) for everything. Monospace (Geist Mono / JetBrains Mono) for dates, stack chips, code and terminal blocks. Hero headline is large (~48–56px desktop), **regular weight (400–500), not bold**, tight letter-spacing, max ~20 words, left-aligned.
- **Buttons:** fully rounded pills. Primary = dark fill + light text. Secondary = light gray fill. Arrow glyphs on links ("View project →").
- **Cards:** 1px hairline border, 10–12px radius, no heavy shadows, subtle background change on hover.
- **Signature element: "app window" frames.** Like Cursor's product shots, show project visuals inside a window frame (title bar with three small gray dots + a centered mono title). Use this for:
  - The hero: a small terminal window showing HIL-Testbench-style UART output (e.g. `> run_tests` … `PASS`). Use clearly illustrative text, never fake numbers presented as real results.
  - Project cards/detail pages: screenshots, PCB renders or code snippets inside the frame.
- **Experience cards:** see the Flip Deck in §11 (replaces the old timeline).
- **Motion:** minimal. Short fade/slide-up on scroll (respect `prefers-reduced-motion`). No glows, no particle backgrounds, no typing animations.
- **Layout:** max content width ~1100px. Generous vertical spacing between sections (~120px desktop). Single column on mobile.

## 11. Flip Deck (experience section)

Goal: a visitor sees all experience in about 60 seconds. Replaces the old timeline.

**Structure**
- One card per entry in §2 (Sunglass Hut, Moves, Steve Madden, Guelph Engineering Society). Projects stay in §3, not in the deck. The YouTube line goes in the "Also" note below the deck, not in the deck.
- Card order: reverse chronological, the same order as §2.

**Card front (what's visible before flipping)**
- Mono date range at the top (e.g. `May 2023 – Present`).
- Role in medium weight, company below it in muted gray.
- Small line at the bottom: `Flip →` (or "Tap to flip" on mobile).

**Card back**
- Exactly the bullets from §2 (3 per entry, no more). Keep the what / how / result structure.
- Tech or skill chips at the bottom where relevant (e.g. Premiere Pro, Excel).

**Controls**
- Stack: the visible card is on top. Show the cards offset slightly behind it, so the stack reads as a deck.
- Previous / Next buttons (pill style, §9), plus a counter `2 / 4`.
- Keyboard: left/right arrows change card; Enter or Space flips.
- **Shuffle** button: reorders the stack randomly, with a short animation. Reset to the default order with a second click or a "Reset" link.
- Swipe on mobile (left/right to change card, tap to flip).

**Motion**
- Flip is a 3D rotate around the Y-axis, about 400ms, ease-out. Shuffle is a short spring animation.
- With `prefers-reduced-motion`, switch to a plain fade with no rotation or shuffle animation.

**Accessibility**
- Each card is a `<button>` with `aria-expanded` set to the flipped state. Both faces stay in the DOM and the back face is readable by screen readers even when not flipped.
- Focus ring on the active card. Announce the card counter with `aria-live="polite"`.

**Layout**
- Desktop: deck centered, about 520px wide, with the controls below it.
- Mobile: full width, with the card about 80% of the viewport height.

**Content note**
- Every card back must have exactly 3 bullets. Entries with TODOs in §2 can't be shipped until the TODOs are filled, so flag them in the final list.

## 10. Quality bar

- Fully responsive (375px → 1440px). Keyboard accessible, visible focus rings, alt text, semantic headings, AA contrast in both themes.
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices and SEO.
- SEO: page titles, meta descriptions, Open Graph image (name + headline on the off-white background), favicon, sitemap.
- `npm run build` passes with no type or lint errors.
