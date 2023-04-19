---
sidebar_position: 2
title: Bundles
description: Bundles are the data structure used to post data from Bundlr to Arweave.
slug: /learn/bundles
---

# Bundles

A bundle is a data structure representing a group of transactions. Any number of layer 2 data transactions can be compressed and included in a single bundle layer 1 transaction.

## Why Bundles?

Bundles allow for infinite transaction scaling - allowing up to 2^256 transactions to be stored in a single bundle. As bundle sizes increase, Arweave's transaction capacity can increase linearly - i.e. using 1 million item bundles allow for a 1,000,000x increase in layer 1 transaction capacity.

The bundle spec, designed by Bundlr, is open-sourced and is currently implemented in [JavaScript](https://github.com/Bundlr-Network/arbundles), [Go](https://github.com/everFinance/goar), and [Rust](https://github.com/Bundlr-Network/rust-sdk).

To learn more, please refer to the [spec documents](https://github.com/ArweaveTeam/arweave-standards/blob/master/ans/ANS-104.md).