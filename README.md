# Personal website

(Check it live)[pimpaudben.fr]

## Build locally

1. Pull the latest mkdocs-material image : `docker pull squidfunk/mkdocs-material`.

2. Run `docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material`.

Then you can find the documentation at localhost:8000.

3. [OPTIONAL] You can build HTML sources by `docker run --rm -v ${PWD}:/docs squidfunk/mkdocs-material build`.