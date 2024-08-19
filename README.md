# Shopify extensibility custom Shipping message checkout App Template - Remix

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) using the [Remix](https://remix.run) framework.

<!-- TODO: Uncomment this after we've started using the template in the CLI -->
<!-- Rather than cloning this repo, you can use your preferred package manager and the Shopify CLI with [these steps](#installing-the-template). -->

## Step 1: Setup Shopify app and install it on store

### Prerequisites

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
2. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
3. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

<!-- TODO Make this section about using @shopify/app once it's added to the CLI. -->

### Setup

If you used the CLI to create the template, you can skip this section.

1. Run the below command to install the node module.

```shell
npm install
```

2. If you received an error about fixing the npm audit then run the below commands as required:

```shell
npm audit fix
```
OR

```shell
npm audit fix --force
```


### Make sure you are your CLI version is 3.5 or higher

1. check shopify CLI version

```shell
npm run shopify version
```

2. Run below command to update CLI version run

```shell
npm run shopify upgrade
```

### Local Development

```shell
npm run shopify app dev
```

This setup will take you through creating a new Shopify App. You must be logged in to your partner account before starting this command. Enter name for your app and proceed next until it shows app preview link and graph QL link. 


## Step 2: Deploy the app.

Press Ctrl+C to stop the app development environment and then, run below in terminals to deploy your app.

```shell
npm run shopify app deploy
```

## Step 4: Edit the messages

You can edit the file "Checkout.jsx" to make changes in the custom shipping messages.
