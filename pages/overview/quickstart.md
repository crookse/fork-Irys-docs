---
sidebar_label: Quickstart
sidebar_position: 5
description: Start saving data on the permaweb in 3 quick steps
slug: /quickstart
---

# Quickstart

Install our SDK and upload data to the permaweb in just a few steps. For full details on each step see our [SDK documentation](/developer-docs/sdk).

#### Step 1: [Install the SDK](/developer-docs/sdk/installing-the-sdk)

```js
npm install @bundlr-network/client
```

#### Step 2: [Connect To A Bundlr Node](/developer-docs/sdk/connecting-node)

```js
const bundlr = new Bundlr("http://node2.bundlr.network", "matic", “<polygon_private_key>”);
```

#### Step 3: [Fund Your Node](/developer-docs/sdk/funding-node) (To Pay For Uploads)

```js
const response = await bundlr.fund(fundAmount);
```

#### Step 4: [Upload Data](/developer-docs/sdk/uploading-data)

```js
const dataToUpload = "GM world.";
const response = await bundlr.upload(dataToUpload);
```

#### Step 5: [Download Your Data](/developer-docs/sdk/downloading-data)

```js
console.log(`Data Available at => https://arweave.net/${response.id}`);
```