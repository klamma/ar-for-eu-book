#!/bin/bash

# exit on non-zero results
set -e

echo "Starting deployment"

REMOTE_REPO="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

# clone repo
git clone $REMOTE_REPO repo
cd repo

# install dependnencies
echo "Installing project dependencies"
bundle install

# Build the website using Jekyll
echo "Building website"
JEKYLL_ENV=production bundle exec jekyll build
echo "Jeykll build done"

# go to generated folder
cd _site

echo "Publishing book"

# remove readme
rm -f README.md

# init new git repository inside _site to commit to gh_pages branch
git init
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
git add .

git commit -m "GitHub Actions - $(date)"
echo "Build branch ready to go. Pushing to GitHub"
# force push
git push --force $REMOTE_REPO master:gh-pages
# finished
# clean up
rm -fr .git
cd ..
rm -rf repo
echo "New version deployed"