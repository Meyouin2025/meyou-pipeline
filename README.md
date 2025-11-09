# Meyou Pipeline

A Cloudflare Workers-based pipeline project for Meyou Studios.

## Project Structure

```
meyou-pipeline/
├── site/           # Static website files
│   ├── css/        # Stylesheets
│   └── index.html  # Main page
├── worker/         # Cloudflare Worker
│   ├── worker.js   # Worker script
│   └── wrangler.toml # Wrangler configuration
└── .github/        # GitHub Actions workflows
    └── workflows/  # CI/CD pipelines
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Git](https://git-scm.com/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Meyouin2025/meyou-pipeline.git
   cd meyou-pipeline
   ```

2. **Install Wrangler (if not already installed):**
   ```bash
   npm install -g wrangler
   ```

3. **Authenticate with Cloudflare:**
   ```bash
   wrangler login
   ```

### Development

#### Running the Worker Locally

```bash
cd worker
wrangler dev
```

The worker will be available at `http://localhost:8787`

#### Testing the API

Test the `/api/ping` endpoint:
```bash
curl http://localhost:8787/api/ping
```

Expected response:
```json
{
  "ok": true,
  "build": "MB-PIPELINE",
  "time": "2024-01-01T00:00:00.000Z",
  "routes": ["/api/ping"]
}
```

### Deployment

#### Automatic Deployment

The project uses GitHub Actions for automatic deployment:
- Pushes to the `main` branch trigger deployment to Cloudflare Workers
- The workflows require `CF_API_TOKEN` and `CF_ACCOUNT_ID` secrets

#### Manual Deployment

```bash
cd worker
wrangler deploy
```

## Git Workflow

### Using VS Code

1. **Stage changes:** Click the '+' icon next to files in the Source Control panel
2. **Commit changes:** Enter a commit message and click the checkmark (✓)
3. **Push changes:** Click the '...' menu and select 'Push' or use the sync button

### Using Command Line

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

### Troubleshooting Push Issues

If you encounter issues pushing from VS Code:

1. **Check your Git credentials:**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. **Verify remote URL:**
   ```bash
   git remote -v
   ```
   Should show: `https://github.com/Meyouin2025/meyou-pipeline`

3. **Update your branch:**
   ```bash
   git pull origin main
   ```

4. **Clear VS Code Git cache:**
   - Close VS Code
   - Delete `.git/index.lock` if it exists
   - Reopen VS Code

5. **Use SSH instead of HTTPS (optional):**
   ```bash
   git remote set-url origin git@github.com:Meyouin2025/meyou-pipeline.git
   ```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## CI/CD

The project includes several GitHub Actions workflows:

- **worker-ci.yml**: Runs dry-run tests and deploys to Cloudflare
- **deploy-worker.yml**: Deploys the worker to production
- **wrangler-dry-run.yml**: Validates Wrangler configuration

## License

Copyright © 2024 Meyou Studios. All rights reserved.
