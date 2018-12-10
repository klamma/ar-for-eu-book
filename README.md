# ar-for-eu-book

Environment for AR-FOR-EU Book

Please perform easy tests for creating markdown


# HowTo Run Locally

## Prepare Development Environment

1. Install [Ruby](https://www.ruby-lang.org) on your machine

2. Clone this repository and open a terminal / command line in your main project folder

3. Install bundler

    gem install bundler

4. Use bundler to pull Jekyll

    bundle install
		bundle update

## Build & Serve Locally

First, please change the _config.yml "url" parameter to "http://localhost:4000".
Please don't commit this change!
Now build the page locally with

    jekyll serve

 Navigate your browser to `http://localhost:4000/Online-Buch/` to check results while you develop.
