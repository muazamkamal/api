FROM hayd/alpine-deno:1.4.6

EXPOSE 3000

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache --unstable main.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "--allow-env", "--unstable", "main.ts"]