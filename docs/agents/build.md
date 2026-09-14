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
bundle exec jekyll build          # writes _site/
bundle exec jekyll serve          # http://localhost:4000, rebuilds on save
```

## Test

```sh
npm test                          # node --test test/; needs Node 22 or newer
```

The test in `test/site.test.mjs` builds the site into a temporary folder with
`--strict_front_matter`, so a page whose front matter does not parse fails the test instead of
silently building at the wrong address. It then asserts on the HTML that comes out. Later tickets
add their assertions to the same file (op-043).

The test looks for Homebrew's Ruby at `/opt/homebrew/opt/ruby/bin` on its own, so `npm test`
works without the `PATH` line above.

## Deploy

`.github/workflows/jekyll.yml` runs `npm test` on every push to `main` before GitHub's Jekyll
action builds and deploys. A failing test stops the run, so a broken commit never reaches
metaphasemgt.com.

Note: GitHub's `jekyll-build-pages` action builds with the `github-pages` gem, which pins Jekyll
3.10, while the local build and the test use Jekyll 4.4 from the Gemfile. The site builds under
both today; a template that leans on a Jekyll 4-only feature would pass the test and fail the
deploy. Proposal op-063 asks whether the workflow should build from the Gemfile instead.
