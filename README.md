# ESC Documentation Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Structure

The documentation is organized by departments and versions:
- The `docs` folder is the current version of the documentation.
- The `versioned_docs` folder is the archived version of the documentation.

```
docs/
├── TECH/                   # Technology department
│   ├── project-a/        
│   │   ├── setup.md
│   │   └── deployment.md
│   └── project-b/
│       └── guide.md
├── MARCOM/      # Marketing Department
│   └── advertising.md

versioned_docs/
│   └── version-esc-66/
│       ├── TECH/
│       │   ├── project-a/
│       │   │   ├── setup.md
│       │   │   └── deployment.md
│       │   └── project-b/
│       │       └── guide.md
│       └── MARCOM/
│           └── advertising.md
```

## Contribute to ESC Docs
Checkout [CONTRIBUTING.md](CONTRIBUTING.md) for more information.
