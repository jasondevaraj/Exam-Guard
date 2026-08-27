# ExamGuard Frontend (Refactor)

This repository is a refactor of exported UI pages into a modular React + Vite + Tailwind frontend.

## Quick start

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- Authentication is mocked and persisted in `localStorage`.
- Exam questions and exams are sample data in `src/utils/mockData.js`.
- Tailwind is configured in `tailwind.config.js`.
- Routes are defined in `src/App.jsx` and protected by `src/routes/ProtectedRoute.jsx`.

If you'd like, I can run a quick verification (install & start) or add a CI configuration next.
