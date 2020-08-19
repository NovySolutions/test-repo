## Icons

Icons are used via Remix Icon: https://remixicon.com/
It is open sourced and needs no account to use

## Hooks

The useImageQuery hook is used to hold the graphQl query for all the images on the site.

## Free components

This file is used to store all components that arent tied to a specific component type (i.e. header, footer, layout).

## Header components

Contains all components and styles that strictly apply to the header component.

There is a desktopHeader component and a mobileHeader component in this folder, the headers were drastically different, so i decided to make a component for each version of it.

## Footer components

Contains all components and styles that strictly apply to the footer component.

## Pages

Contains all Page and Index components and styles for the site.

## CSS in this site

I am using combination of bootstrap styling along with the layout.module.scss file to override some of bootstraps styles I dont like.

The pages.module.scss file is meant to apply page specific styles, I use this as little as possible.

Each component folder has its own css folder with the scss files for the corresponding components.

The _zindex.scss is used for controlling the stacking of elements across the site

The bootstrap.min.scss file has been manually altered to keep from overriding custom styles

The index.scss file is really only being used to set the font-family

## Senior centers page

This page's list view is generated by maping over an array of counties, and mapping again over each of the senior centers in each county.

Each county creates a Section header with the county name, and each senior center generates a Direction Card that renders the seniorCenterInfo component on click.

This page is a mini SPA (Single Page Application), when a user selects a senior center, it replaces the seniorCenterList component with the seniorCenterInfo component using Reach Router.

The seniorCenterInfo component is dynamically rendered depending on the parameter in the url, it uses the useParams hook for this. The parameter is set when the link on the senior center card is selected.

## Static folder 

This folder contains all images sorted by type in their own folders.

It also contains a file called localData.tsx, this is used as a mini local database to store info to keep from cluttering componenets too much

The file reuseableFunctions.tsx is pretty self explanatory, it is used to store functions that i use in multiple places accross the site

## gatsby-node config

I am using this file to do the following: 
  1. Ignore css load warnings as i am using modules so the load order doesnt matter
  2. Enable the Senior Centers page to act as an SPA by specifying i want to be able to control what comes after the '/' in resources/senior-centers/

###Google Api is managed at the google cloud platform [HERE](https://console.developers.google.com/)

###Site is hosted via netlify [HERE](https://app.netlify.com/teams/ooacsi/sites)

###Site reCAPTCHA is managed [HERE](https://www.google.com/recaptcha/admin/site/431946814)

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSgaD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
