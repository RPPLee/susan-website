# Building and testing the site

The site is Jekyll 4 (see `Gemfile`). The system Ruby on a Mac is 2.6 and cannot run it, so the
build uses Homebrew's Ruby. Decision: op-048.

## Setup, once

```sh
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"   # add to ~/.zshrc to make it stick
bundle config set --local path vendor/bundle      # gems stay in the repo, ignored by git
bundle install
```

## Build

```sh
npm run build                     # writes _site/
npm run serve                     # http://localhost:4000, rebuilds on save
```

Both scripts put Homebrew's Ruby first on `PATH`, so they work in a shell that never ran the
export above. `bundle exec jekyll ...` directly needs that export first.

## Test

```sh
npm test                          # needs Node 22 or newer
```

The test in `test/site.test.mjs` builds the site into a temporary folder with
`--strict_front_matter`, so a page whose front matter does not parse fails the test instead of
silently building at the wrong address. It then asserts on the HTML that comes out. Later tickets
add their assertions to the same file (op-043).

`test/editor.test.mjs` is the one check that does not read the built site: it reads the editor
configuration, `.pages.yml`, and asserts that every path and field in it exists in the source
(docs/agents/editor.md). Both files share `test/jekyll.mjs` for the repo path, the Ruby to use
and a YAML reader.

The test hardcodes Homebrew's Ruby path, `/opt/homebrew/opt/ruby/bin`, and prefers it, so `npm test`
works without the `PATH` line above.

## Pushing

The remote is `https://RPPLee@github.com/...` and the repo's own `credential.helper` hands git the
`RPPLee` token from `gh`, whichever `gh` account is active. `git push` just works; no
`gh auth switch` needed. `gh` API calls against the repo (Pages settings, workflow runs that need
write) still take `gh auth switch -u RPPLee`.

## Deploy

`.github/workflows/jekyll.yml` runs `npm test` on every push to `main` before GitHub's Jekyll
action builds and deploys. A failing test stops the run, so a broken commit never reaches
metaphasemgt.com.

Note: GitHub's `jekyll-build-pages` action builds with the `github-pages` gem, which pins Jekyll
3.10, while the local build and the test use Jekyll 4.4 from the Gemfile. The site builds under
both today; a template that leans on a Jekyll 4-only feature would pass the test and fail the
deploy. Proposal op-063 asks whether the workflow should build from the Gemfile instead.
