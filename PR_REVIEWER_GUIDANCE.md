# PR Reviewer Guidance

Use this checklist when reviewing pull requests:

- **Scope & purpose:** Does the PR have a clear description and purpose?
- **Tests:** Are there tests, or is the change low-risk UI/UX only?
- **Accessibility:** Keyboard navigation, semantic HTML, ARIA labels, alt text, captions where needed.
- **Performance:** Lazy-loading, image sizing, animation cost, bundle impacts.
- **Security:** No secrets checked in, safe external resources.
- **Code quality:** Readability, single responsibility, SOLID principles.
- **Docs:** Is README/CONTRIBUTING updated if needed?

If everything looks good, approve and request a squash-merge with a descriptive commit message.
