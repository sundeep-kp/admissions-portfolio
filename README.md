>This following project was a quick portfolio I created under a day.

## Steps to replicate

If you want to create a similar site, then follow these instructions:

1. Create a plan for your website, this part is the longest. Everything in a simple document, don't start designing anything yet. Just the content , so you don't waste time thinking about it later on.

2. Now decide on the hook and unique features that set your website apart, for me it was a looping ornothopter mechanism video that I created using SOLIDWORKS. 

3. Decide on website structure. Think in terms of ratios not pixels. Design mobile first (harder to convert desktop sites in mobile ones later)


4. Decide on the color pallete

>Take a look at [Portfolio website plan](/admissions-portfolio/Portfolio%20website%20plan.md) for reference


5. Setup Astro and make an empty template, setup git.
Use the following prompts in order in prefferably an inline code assistant like copilot rather than fully autonomous vibe coding assitant like claude code just so you have overall project context.---


# 0. Initial Context (once)
> The website will look shitty till the basic structure is done and all content is in place. That's when you start adding in assets , applying themes etc.

Paste this into Copilot Chat.

```text
You are helping build a university transfer admissions portfolio.

Audience:
Transfer admissions officers.

NOT recruiters.

Requirements:
- Astro
- Static website
- Single scrollable page
- Mobile first
- Responsive using flexbox/grid, rem, %, clamp()
- Semantic HTML
- Reusable Astro components
- No Tailwind
- No Bootstrap
- Minimal JavaScript
- No placeholder lorem ipsum
- Never rewrite my text
- Use placeholders like [Description Missing] when content is unavailable.
- Keep code clean and maintainable.
- Never modify components unrelated to the current task.
```

---

# 1. Project Structure

Prompt:

```text

Create the project architecture.

Do NOT build the website yet.

Create:

components/
layouts/
pages/
styles/
data/

Create empty Astro components for every section.

Create a reusable Layout.astro.

Create a global stylesheet.

Create empty data files.

Make a file named missing.md containing all missing data/assets I have to fill. Put a checkbox like [] infront of each task , along with instructions and link to the exact section i need to edit. update it regularly. I'll put a [x] when I add data/file

Do not add any styling besides a basic CSS reset.
```

### Check

- Folder structure correct
- Runs successfully

```bash
npm run dev
```

Commit.

```
Initial architecture
```

---

> a good idea to run /create-instructions with a prompt like analyse plan


# 2. Navbar

Prompt

```text
Build only the sticky navigation.

Requirements:

- stays fixed on top
- scrolls smoothly
- links to page sections
- desktop centered
- mobile horizontally scrollable
- responsive
- no fancy animations

Do not modify any other section.
```

### Check

✓ Sticky

✓ Mobile

✓ Smooth scrolling

Commit.

```
Navbar complete
```

---

# 3. Hero

Prompt

```text
Build only the Hero section.

Desktop:

55% text
45% image/video

Mobile:

Stack vertically.

Include placeholders for

Name

Introduction

University

Research interests

Buttons

Do not style beyond clean spacing.

Leave a placeholder for the ornithopter video.

Do not build the video yet.
```

### Check

Resize browser.

Looks good.

Commit.

---
> Unfornately this is when i realised that Copilot just crushed their student plan. They removed the ability to use haiku and other models. Leaving only shitty models behind.

# 4. Timeline + Video

Prompt

```text
Build only the Timeline section.

Desktop:

35% timeline

65% video placeholder.

Mobile:

Timeline first.

Video below.

Timeline items should come from data/timeline.ts.

Leave the video as a placeholder.

Do not add animations.
```

### Check

Timeline scales properly.

Commit.

---

# 5. About

Prompt

```text
Build only the About section.

Single column.

Readable line length.

Large spacing.

No sidebars.

Leave placeholders where text is missing.

Do not modify previous sections.
```

Commit.

---

# 6. Research

Prompt

```text
Build only the Research section.

Three cards:

Research interests

Currently reading

Future research directions

Responsive.

Cards should be reusable.

Do not populate content.
```

Commit.

---

# 7. Leadership

Prompt

```text
Build only the Leadership section.

Responsive cards.

Each card contains

Title

Description

Links

Cards must be reusable.

Content comes from leadership.ts.

No animations.

No icons.
```

Commit.

---

# 8. Project Card

Prompt

```text
Create a reusable ProjectCard component.

Props:

Image

Title

Category

Description

Links

Status

Tags

Buttons

Do not build the Projects section yet.
```

### Check

Reusable?

Looks good?

Commit.

---

# 9. Projects

Prompt

```text
Build only the Featured Projects section.

Categories:

Robotics

Machine Learning

Software

Render ProjectCard components from data/projects.ts.

Leave image placeholders.

Do not invent projects.

Do not change ProjectCard.
```

Commit.

---

# 10. Awards

Prompt

```text
Build the Awards section.

Three columns desktop.

One column mobile.

Cards come from awards.ts.

Leave placeholders.

No icons.
```

Commit.

---

# 11. Skills

Prompt

```text
Build the Skills section.

Groups:

Programming

Robotics

Embedded

CAD

Development

Use chips.

Responsive.

Content from skills.ts.
```

Commit.

---

# 12. Learning

Prompt

```text
Build the Currently Learning section.

Simple cards.

Books.

Current projects.

Research.

Responsive.
```

Commit.

---

# 13. Hobbies

Prompt

```text
Build the Hobbies section.

Simple cards.

No icons.

No illustrations.

Responsive.
```

Commit.

---

# 14. Contact

Prompt

```text
Build the Contact section.

Resume button.

GitHub.

LinkedIn.

Email.

HalfwiredTV.

Simple centered layout.

Responsive.
```

Commit.

---

# 15. Populate

Prompt

```text
Populate every section using the content from my planning document.

Never rewrite my wording.

Keep placeholders exactly where information is missing.

Do not invent text.
```

---

# 16. Ornithopter

Prompt

```text
Replace the video placeholder.

Embed the looping ornithopter video.

Desktop:

65% width.

Mobile:

100%.

Muted.

Autoplay.

Loop.

playsinline.

Maintain aspect ratio.
```

Commit.

---

# 17. Images

Prompt

```text
Replace image placeholders with the available images.

Maintain consistent card sizes.

Never crop important content.

Images should lazy load.

Keep responsive.
```

---

# 18. Final Polish

Prompt

```text
Review the website.

Improve only:

spacing

alignment

typography

responsive layout

accessibility

consistency

Do not redesign.

Do not move sections.

Do not rewrite text.

Do not add animations.
```

---

# 19. Mobile Audit

Prompt

```text
Perform a mobile-first audit.

Target widths:

320

375

390

430

768

1024

List every responsive issue.

Fix only layout issues.

Do not change styling.
```

---

# 20. Accessibility Audit

Prompt

```text
Review accessibility.

Check:

Heading hierarchy

Alt text

Button labels

Keyboard navigation

Color contrast

ARIA where needed

Fix only accessibility issues.
```

---

# 21. Performance Audit

Prompt

```text
Optimize performance.

Reduce unnecessary CSS.

Remove unused JavaScript.

Lazy load images.

Preload only critical assets.

Do not change appearance.
```

---

# 22. Final Code Review

This is the prompt I'd always end with before deployment:

```text
Act as a senior frontend engineer reviewing this project before production.

Review:

Folder structure

Astro best practices

Responsive layout

Accessibility

Performance

Maintainability

Code duplication

Semantic HTML

List every issue in priority order.

Fix only high-priority issues.

Do not redesign anything.
```

## Throughout the process

Every time Copilot completes a step:

1. **Run the app** (`npm run dev`) and visually inspect the new section.
2. **Check the browser console** for errors or warnings.
3. **Resize** to at least one phone width (around 390 px) and one desktop width to catch responsive issues early.
4. **Commit** only after you're satisfied with that section.

By the time you reach deployment, you'll have a sequence of small, reversible commits instead of one huge change that's difficult to debug.