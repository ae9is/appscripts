# appscripts

Miscellaneous Google Apps Script projects.

## Deployment

Example guide to deploy an endpoint that any app you make can access without needing to authenticate:
1. Go to https://script.google.com/ and create a new project
1. Copy and paste (and save!) your code into the new project's script, overwriting the contents
1. Select Deploy &rarr; New Deployment
1. In the New Deployment dialogue, click the gear next to "Select type" and choose "Web app"
1. Fill in the following settings and then Deploy
    - Execute as: Me
    - Who has access: Everyone
1. Copy your Deployment ID (api key) ** **Don't share this!** **

Now that you've deployed your own api, you can enter the api key into your client app. For an example client app feel free to check out [subtitle-chan](https://github.com/ae9is/subtitle-chan), specifically [this hook](https://github.com/ae9is/subtitle-chan/blob/main/src/lib/useSubtitles.ts).

Don't share your Deployment ID with anyone you don't want accessing your endpoint! There is no protection with the above config.

Google Apps Script has a quota of 5000 requests per day for free user accounts. If you run out of quota, you can upgrade to a paid Google Workspace account (your quota will increase from 5k &rarr; 20k calls per day).

Note that web app url contains the Deployment ID (key) already, it's formatted like:
`https://script.google.com/macros/s/<Deployment ID>/exec`
