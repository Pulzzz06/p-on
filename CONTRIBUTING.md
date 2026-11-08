# Contributing to P-On

Thanks for taking a look! This project is intentionally small.

## Development

```bash
npm install
npm run dev
```

Before opening a pull request, make sure these pass:

```bash
npm run typecheck
npm run lint
npm run build
```

## Good contributions

- Fixes for accessibility, responsiveness, or performance
- New icon keys in `lib/icons.tsx` (follow the existing naming)
- Additional theme presets that use CSS variables
- Documentation improvements, especially deployment notes

## Please avoid

- Adding a database, authentication, or a dashboard — P-On is a static template
- Heavy UI or animation dependencies
- Tracking scripts that are enabled by default
- Changing the contents of `config/site.ts` in a PR; that file belongs to each user

## Pull requests

Keep them focused, describe the user-facing change, and include a screenshot
for visual changes. By contributing, you agree that your work is licensed under
the MIT License.
