# React Storybook Example

I created this project to demonstrate to react users how easy it is to have:

- fast local development cycle
- awesome testing feedback loop
- automatic auto deploy to netlify

## The story


### Step one

I started with the following:

```
.babelrc
package.json
package-lock.json
src/
    toggle/
        component.js
```

`component.js` was a simple react component.

### Step two

Next we follow the Storybook getting started and create the configuration and test files:

```
.storybook/
    config.js
src/
    toggle/
        component__story.js
```

We add some entrypoint commands to `package.json`:

```
...
    "dev": "npm-run-all --parallel dev:test dev:storybook",
    "dev:test": "jest --watch",
    "dev:storybook": "start-storybook -p 9001 -c .storybook",
    "prod": "build-storybook -c .storybook -o docs"
...
```

At this point, the project is ready for local development and netlify deployments.

### Step Three

__TODO__

- here we need to extend the `package.json` commands so that `prod` can create distributable builds of the components.
