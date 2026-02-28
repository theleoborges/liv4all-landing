# Liv4All Landing Page

Static SPA landing page for **hello.liv4all.com**.

## Structure

Single `index.html` — no build step, no dependencies. Just deploy.

## Setup

### 1. Formspree (interest form)

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `index.html` with your form endpoint ID
4. The form action URL should look like: `https://formspree.io/f/xyzabcde`

### 2. Deploy

**GitHub Pages:**
```bash
# Push to a repo, enable Pages on main branch
```

**Netlify:**
```bash
# Drag & drop the folder, or connect the repo
# Set publish directory to: /
```

**Cloudflare Pages:**
```bash
# Connect repo, build command: (none), output directory: /
```

**S3 + CloudFront:**
```bash
aws s3 sync . s3://hello.liv4all.com --exclude "README.md"
```

### 3. DNS

Point `hello.liv4all.com` to wherever you deploy (CNAME or A record).

## Customization

- Replace `YOUR_FORM_ID` in the form action URL
- Optionally add an avatar/og-image for social sharing
- All styles are inline — edit the `<style>` block directly

## Alternative: Google Form

If you prefer Google Forms over Formspree, replace the `<form>` block with:

```html
<iframe
  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
  width="100%"
  height="400"
  frameborder="0"
  style="border: none; border-radius: 12px;"
>Loading…</iframe>
```
