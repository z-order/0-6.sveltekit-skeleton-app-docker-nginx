# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

<br>

## Static site generation

Build and deply: [Adapters - https://kit.svelte.dev/docs/adapters](https://kit.svelte.dev/docs/adapters)

Build and deply: [Static site generation - https://kit.svelte.dev/docs/adapter-static](https://kit.svelte.dev/docs/adapter-static)

Build and deply: [Single-page apps - https://kit.svelte.dev/docs/single-page-apps](https://kit.svelte.dev/docs/single-page-apps)

Build and deply: [Page options - https://kit.svelte.dev/docs/page-options](https://kit.svelte.dev/docs/page-options)

<br>

## Cloudflare, Node servers

Build and deply: [Cloudflare Pages - https://kit.svelte.dev/docs/adapter-cloudflare](https://kit.svelte.dev/docs/adapter-cloudflare)

Build and deply: [Cloudflare Workers - https://kit.svelte.dev/docs/adapter-cloudflare-workers](https://kit.svelte.dev/docs/adapter-cloudflare-workers)

Build and deply: [Node servers - https://kit.svelte.dev/docs/adapter-node](https://kit.svelte.dev/docs/adapter-node)

<br>

# The way of how to build docker image and run.

```sh
[~]$ docker build -t <image-name:tag> .
[~]$ docker run -dp 80:80 <image-name:tag>
[~]$ docker stop <container-id>
[~]$ docker rm <container-id>
[~]$ docker rmi <image-name:tag>

and with docker compose

[~]$ docker compose -p <my-project-name> up -d       # -p, --project-name
[~]$ docker compose down -v
```

<br>


## Refs:

The choice of CSS and SCSS framework depends on your specific requirements and preferences. Each framework you mentioned—Bootstrap, Tailwind CSS, and Skeleton—has its own strengths and characteristics. Here's a brief overview of each framework to help you make an informed decision:

`Bootstrap`: Bootstrap is a popular and widely used CSS framework that provides a comprehensive set of pre-styled components and utilities. It offers a rich collection of responsive design elements, such as grids, typography, forms, buttons, and navigation. Bootstrap has a consistent and well-documented API, making it relatively easy to get started. However, Bootstrap's extensive styling may result in larger CSS files and a more opinionated design.

`Tailwind CSS`: Tailwind CSS takes a different approach compared to Bootstrap. It provides a utility-first CSS framework, offering a large set of utility classes that you can directly apply to your HTML elements to style them. Tailwind CSS allows for more flexibility and customization, as you can easily compose and customize utility classes to achieve the desired design. However, it may require a bit more effort to learn and work with compared to Bootstrap.

`Skeleton`: Skeleton is a lightweight CSS framework that aims to provide a minimal set of styles for common web development needs. It provides a responsive grid system, basic styling for typography and buttons, and a few other components. Skeleton is designed to be lightweight and unobtrusive, making it a good choice if you prefer a simpler and less opinionated framework. However, it may lack some of the advanced features and components provided by Bootstrap or Tailwind CSS.
Ultimately, the best framework for your project depends on factors such as your project requirements, design preferences, learning curve, and the specific features and components offered by each framework. It can be helpful to explore the documentation and examples of each framework to see which one aligns best with your needs. Additionally, you can consider factors such as community support, available plugins or extensions, and the overall ecosystem around the framework.