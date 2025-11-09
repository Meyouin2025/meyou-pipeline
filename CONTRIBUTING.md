# Contributing to Meyou Pipeline

Thank you for your interest in contributing to the Meyou Pipeline project! This document provides guidelines and instructions for contributing.

## Getting Started

### 1. Fork and Clone

If you don't have write access to the repository:

1. Fork the repository on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/meyou-pipeline.git
   cd meyou-pipeline
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/Meyouin2025/meyou-pipeline.git
   ```

### 2. Set Up Your Development Environment

1. Install recommended VS Code extensions (you'll be prompted when opening the project)
2. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
3. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

## Development Workflow

### Creating a Branch

Always create a new branch for your changes:

```bash
# Update your main branch
git checkout main
git pull origin main

# Create a new branch
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests

### Making Changes

1. Make your changes in your branch
2. Test your changes locally:
   ```bash
   cd worker
   wrangler dev
   ```
3. Test the API endpoints

### Committing Changes

#### Using VS Code

1. Open the Source Control panel (Ctrl+Shift+G or Cmd+Shift+G)
2. Review your changes
3. Stage files by clicking the '+' icon next to each file
4. Enter a descriptive commit message in the text box
5. Click the checkmark (✓) to commit

#### Using Command Line

```bash
# Check what files have changed
git status

# Stage specific files
git add path/to/file

# Or stage all changes
git add .

# Commit with a message
git commit -m "Brief description of your changes"
```

### Commit Message Guidelines

Write clear, concise commit messages:

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- First line should be 50 characters or less
- Reference issues when applicable ("Fix #123")

Examples:
```
✅ Good:
- Add /api/ping endpoint
- Fix CORS headers in worker
- Update deployment documentation
- Refactor error handling

❌ Bad:
- Updated stuff
- fix
- WIP
- asdfasdf
```

### Pushing Changes

#### Using VS Code

1. Click the '...' menu in the Source Control panel
2. Select 'Push' or click the sync button (↻) in the status bar
3. If this is your first push on a new branch, VS Code will prompt you to publish the branch

#### Using Command Line

```bash
# Push your branch
git push origin feature/your-feature-name

# If it's your first push on this branch
git push -u origin feature/your-feature-name
```

### Common Push Issues and Solutions

#### Authentication Issues

**Problem:** Git asks for username/password repeatedly

**Solution 1 - Use GitHub CLI:**
```bash
gh auth login
```

**Solution 2 - Use SSH:**
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add SSH key to GitHub (copy and paste to GitHub.com > Settings > SSH Keys)
cat ~/.ssh/id_ed25519.pub

# Change remote URL to SSH
git remote set-url origin git@github.com:Meyouin2025/meyou-pipeline.git
```

**Solution 3 - Use Personal Access Token:**
1. Go to GitHub.com > Settings > Developer settings > Personal access tokens
2. Generate a new token with 'repo' scope
3. Use the token as your password when Git prompts for credentials

#### Permission Denied

**Problem:** `Permission denied (publickey)` or `403 Forbidden`

**Solution:**
- Verify you have write access to the repository
- If using a fork, push to your fork first, then create a pull request
- Check your GitHub authentication:
  ```bash
  gh auth status
  ```

#### Rejected Push (Non-Fast-Forward)

**Problem:** `Updates were rejected because the remote contains work that you do not have locally`

**Solution:**
```bash
# Pull the latest changes
git pull origin main --rebase

# Resolve any conflicts if they occur
# Then push again
git push origin feature/your-feature-name
```

#### Lock File Issues

**Problem:** `.git/index.lock` file exists

**Solution:**
```bash
rm -f .git/index.lock
```

### Creating a Pull Request

1. Push your branch to GitHub
2. Go to the repository on GitHub
3. Click "Compare & pull request"
4. Fill in the PR template:
   - Describe what changes you made
   - Reference any related issues
   - Add screenshots if applicable
5. Submit the pull request

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Ensure all CI checks pass
- Respond to review comments promptly
- Keep your branch up to date with main

## Code Style

### JavaScript

- Use ES6+ features
- Use async/await instead of promises where possible
- Use meaningful variable names
- Add comments for complex logic

### HTML/CSS

- Use semantic HTML elements
- Follow consistent indentation (2 spaces)
- Keep CSS organized and modular

## Testing

Before submitting a PR:

1. Test the worker locally:
   ```bash
   cd worker
   wrangler dev
   ```

2. Test the /api/ping endpoint:
   ```bash
   curl http://localhost:8787/api/ping
   ```

3. Verify CORS headers work:
   ```bash
   curl -X OPTIONS http://localhost:8787/api/ping -H "Origin: http://example.com" -v
   ```

## Getting Help

If you encounter issues:

1. Check the [README.md](README.md) for basic setup
2. Search existing issues on GitHub
3. Ask in the project discussions
4. Contact the maintainers

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Keep discussions professional

## License

By contributing, you agree that your contributions will be subject to the project's license.

---

Thank you for contributing to Meyou Pipeline! 🚀
