# React Storybook Example

I created this project to demonstrate to react users how easy it is to have:

- fast local development cycle
- awesome testing feedback loop
- automatic auto deploy to netlify

## The story


### Step one

I started with the following:

```sh
.babelrc
package.json
package-lock.json
src/
    toggle/
        component.js
```

`component.js` is a basic react class component.

### Step Two: Add Storybook

Next we follow the Storybook getting started and create the configuration and test files:

```sh
.storybook/
    config.js
src/
    toggle/
        component__story.js
```

we install `jest` and `npm-run-all` (which you should seriously checkout).
We add some entrypoint commands to `package.json`:

```json
...
    "dev": "npm-run-all --parallel dev:test dev:storybook",
    "dev:test": "jest --watch",
    "dev:storybook": "start-storybook -p 9001 -c .storybook",
    "prod": "build-storybook -c .storybook -o docs"
...
```

Now `npm run dev` will (in parallel) run jest and storybook in watch mode.

__outcome__

At this point, the project is ready for local development.

### Step Three: Netlify Deployment

- publish your repo to bitbucket or github
- head over to [netlify.com](netlify.com)
- create an account or login
- create a new project, pick your repo
- set publish root to `docs` or the directory your storybook is written to in `npm run prod`
- set branch to `master` or your mainlaine branch.

__outcome__

Now pushed commits to your repo will trigger netlify build and deploy.

### Step Four: Netlify branch deployments

To make code review a complete experience that can involve more than just developers we need to use our own domain name.

- `yourdoma.in` > netlify servers
- `*.yourdoma.in` > netlify servers

1. Follow the info on [Netlify Custom Domains](https://www.netlify.com/docs/custom-domains/)
2. turn on branch deployments in your netlify project.

__outcome__

Pull requests and branches will now trigger build and deploy to subdomains on netlify.

### Step Five: Publish package for public consumption

__TODO__

- here we need to extend the `package.json` commands so that `prod` can create distributable builds of the components.
