### to get ngrok server up and running

```bash
ngrok http 8080
```

### go to repo -> settings -> webhooks

- add ngrok generated url followed by /github-webhook/

- it will look like this

```bash
{ngrok_url}/github-webhook/
```

- set application type to application/json
