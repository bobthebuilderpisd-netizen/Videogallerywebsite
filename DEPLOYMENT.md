# Deploying to GitHub Pages

This video gallery app is configured to deploy automatically to GitHub Pages.

## Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy your site

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`
   - The URL will be shown in the Pages settings after deployment

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   pnpm install
   pnpm run build
   ```

2. **Deploy the `dist` folder:**
   - Go to repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose the branch where you'll push the `dist` folder
   - Select the `/dist` folder (or `/root` if you move contents to root)

## Important Notes

- The app is configured with `base: './'` in `vite.config.ts` to work with GitHub Pages
- The `.nojekyll` file prevents GitHub from processing files with Jekyll
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automatic builds
- Videos are stored in `/src/app/data/videos.ts` - edit this file to add more videos

## Adding Videos

Edit `/src/app/data/videos.ts` and push your changes. The site will automatically rebuild and redeploy.

## Troubleshooting

- If the site doesn't load, check the repository Settings → Pages to verify it's enabled
- Make sure the base branch is set to `main` (or `master`) in the workflow file
- Check the Actions tab for build/deployment errors
- Verify that GitHub Pages is set to use GitHub Actions as the source
