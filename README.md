# chrome-tab-pin

Pin and unpin tabs in Chrome extensions.

## Overview

chrome-tab-pin provides utilities to manage pinned tabs.

## Installation

```bash
npm install chrome-tab-pin
```

## Usage

```javascript
import { TabPin } from 'chrome-tab-pin';

await TabPin.pin(tabId);
await TabPin.unpin(tabId);
const isPinned = await TabPin.isPinned(tabId);
```

## API

- `pin(tabId)` - Pin tab
- `unpin(tabId)` - Unpin tab
- `isPinned(tabId)` - Check pinned state

## License

MIT
