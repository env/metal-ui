# Metal UI

Metal UI is a set of UI Components using React and TailwindCSS built by the [Maxihost](https://www.maxihost.com) team.

Metal UI is opinionated, in the sense that it explicitly replaces TailwindCSS variants to support Maxihost's brand identity. While there are no support or plan on supporting theming, most components allow for some degree of customization.

In order to use the package you need to have Tailwind installed in your project, as Metal UI doesn't export Tailwind styles. Some components make use of [twin.macro](https://github.com/ben-rogerson/twin.macro) and we're slowly transitioning the code base to use twin.macro for all components so Tailwind dependency can be dropped on projects using Metal UI.

We built this for desktop applications, so most components are not optimized for responsiveness.

## Installing

Install package:

`npm install @maxihost/metal-ui`

## Set up

1. Metal UI exports a Tailwind preset. This is the easiest way to get started with Metal UI. Not importing the preset will cause components that are using custom variants to break in your project.

Here's an example of the `tailwind.config.js` file on a NextJS project.

```javascript
module.exports = {
  presets: [require("@maxihost/metal-ui/tailwind-preset")], {/* preset */}
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}", {/* change these to your own project paths */}
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@maxihost/metal-ui/dist/**/*.{js,jsx,ts,tsx}",
    "./next.config.js",
  ],
  variants: {},
};
```

2. Metal UI sets Inter as the default font, but it doesn't export the font in order to keep the package small for users that don't use Inter. If you do use Inter, all you have to do is import the font in your project.

On a NextJS project, this is as simples as extending the Head component on `_document.js`

```javascript
import Document, { Html, Head, Main } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
```

## Example usage

Import the component:

`import { Button } from '@maxihost/metal-ui';`

## Component Storybook

- [Storybook](https://maxihost.github.io/metal-ui/)

## Developing

Install and run:

`yarn && yarn dev`

A Storybook tab will open automatically in your browser.

If you want to develop a new component or make changes to one, you might want to run it on a separate project. Go to the directory where you have Metal UI installed and run:

```bash
cd PATH_TO_METALUI
yarn link
yarn install
cd node_modules/react
yarn link
cd ../../node_modules/react-dom
yarn link
cd YOUR_PROJECT
yarn link @maxihost/metal-ui
yarn link react
yarn link react-dom
```
