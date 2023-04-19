---
sidebar_position: 3
title: Bundlr & Arweave
description: Bundlr helps scale Arweave helps reduce pain points experienced by devs. That's why we handle 90% of all traffic on Arweave.
slug: /learn/bundlr-arweave
---

# Bundlr & Arweave

Bundlr started out as a solution to both scale Arweave and reduce pain points experienced by developers. Our horizontal and linear scaling solutions radically increased transactions per second, from **9 TPS** on Arweave directly to more than **50,000 TPS** when using Bundlr.

When uploading to Arweave, you pay for uploads in their native token AR, and sign the transaction using their native cryptography. The AR token isn’t widely available, and the cryptography needed to sign transactions isn’t as familiar to Web3 developers as the cryptography used by Ethereum and Solana. We eased this pain point by including support for 14 different tokens and their related cryptography. Developers can pay using the tokens they have and sign using any private key, including those from Solana and Ethereum.

When uploading to Arweave, data is priced in increments of 256KB. This means if you upload 1KB or 255KB you pay the same. We eased this pain point by charging a straight fee per byte. You only pay for the data you need, no more.

When uploading to Arweave, your transaction is considered **confirmed** once it’s included in a block. Your transaction is considered **final** once 50 confirmations have passed. With a block time of 2 minutes, it takes roughly 100 minutes before a transaction uploaded to Arweave can be considered final. Transaction finality is important, because in the event of a blockchain fork, only finalized transactions are guaranteed not to be dropped. We eased this pain point and streamlined the upload process by introducing optimistic finality. More on this in the next section.

We started out by making it easy to **permanently store** data on Arweave and have continued to innovate by introducing the first of many new solutions, [**Proof Of Provenance**](/learn/proof-of-provenance).