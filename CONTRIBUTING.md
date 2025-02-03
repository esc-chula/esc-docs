# Writing Content in ESC Docs

## Adding Documentation


1. Create your documentation under the appropriate department folder eg. 
   - `docs/TECH/<your-project-name>/<your-content>.md` for tech team documentation
   - `docs/<YOUR-DEPARTMENT>/<your-content>.md` for other departments

2. When writing you must follow the following format [Docusaurus Markdown Features documentation](https://docusaurus.io/docs/markdown-features)
   eg: 
   ```md
   ---
   sidebar_position: 1  
   ---
   # Your Title
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   ```


## Version Transition 

When you want to version the current docs eg. transitioning to a new ESC year (eg. ESC68 to ESC69):

1. First, run this command to version the current docs as an older version. 
   ```bash
   pnpm docusaurus docs:version esc-68
   ```
   This command will copy all current doc contents from `/docs` to `versioned_docs/version-esc-68/` archiving the old version.

2. Update docusaurus.config.ts to reflect the current version:

   In this example, if you are transitioning from ESC68 to ESC69, you should update the docusaurus.config.ts

   from:
   ```ts
   versions: {
     current: {
       label: 'ESC68',
       path: '/',
     },
     'esc-67': {
       label: 'ESC67',
       path: 'esc-67',
     },
   }
   ```
   to:
   ```ts
   versions: {
     current: {
       label: 'ESC69',
       path: '/',
     },
     'esc-68': {
       label: 'ESC68',
       path: 'esc-68',
     },
     'esc-67': {
       label: 'ESC67',
       path: 'esc-67',
     },
   }
   ```

3. The content in `/docs` will now represent the current version (ESC69).