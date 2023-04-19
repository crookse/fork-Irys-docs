---
sidebar_position: 7
sidebar_label: Expired Uploads
description: Recovering expired uploads.
---

# Expired Uploads

Paused uploads will expire after a period of inactivity. If you do need to recover an expired upload, use the following:

```js
const resumeData = uploader.getResumeData(); // get the data required to resume the upload with a new instance
uploader.setResumeData(resumeData); // set resume data
await uploader.uploadTransaction(dataItem); // upload as normal
```