# Docker image based on ruby:2-slim
FROM ruby:2-slim
LABEL author="Benedikt Hensen"
LABEL version="1.0.0"

# install dependencies
ENV BUNDLER_VERSION 2.1.4
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        bats \
        build-essential \
        ca-certificates \
        curl \
        libffi7 \
        make \
        shellcheck \
        git-all \
    && gem install bundler:2.1.4 \
    && bundle config --global silence_root_warning 1

# entrypoint to the scripts
COPY entrypoint.sh /

# define entrypoint
ENTRYPOINT ["sh", "/entrypoint.sh"]