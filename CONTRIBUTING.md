<!-- SPDX-License-Identifier: MIT -->
# Contributing Guidelines

We welcome contributions! Please follow these steps to make the process smooth:

1. **Fork the repository** and clone your fork locally.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server** to verify your changes:
   ```bash
   npm run dev
   ```
5. **Code style** – The project uses Prettier and ESLint. Run:
   ```bash
   npm run lint   # shows lint errors
   npm run lint -- --fix   # automatically fixes them
   ```
6. **Add tests** (if applicable) and ensure they pass:
   ```bash
   npm test
   ```
7. **Commit your changes** with a clear message following the Conventional Commits format, e.g.:
   ```
   feat: add dark‑mode toggle
   ```
8. **Push your branch** and open a Pull Request against `main`.
9. **PR checklist** – In the PR description, ensure you:
   - Explain the problem being solved.
   - Reference any related issue (e.g., `Fixes #12`).
   - Confirm that the CI checks pass.

Thank you for helping improve the Antigravity blog! 🎉
