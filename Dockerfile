#####################################################################
#                            Build Stage                            #
#####################################################################
FROM hugomods/hugo:exts AS builder
# Base URL
ARG HUGO_BASEURL=
ENV HUGO_BASEURL=${HUGO_BASEURL}

# Build site
COPY . /src
RUN hugo --minify --gc

# Generate pagefind index
RUN npm_config_yes=true npx pagefind

#####################################################################
#                            Final Stage                            #
#####################################################################
FROM hugomods/hugo:nginx

# Copy the generated files to keep the image as small as possible.
COPY --from=builder /src/public /site
