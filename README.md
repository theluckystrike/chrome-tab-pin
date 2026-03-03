# chrome-tab-pin

[![npm version](https://img.shields.io/npm/v/chrome-tab-pin)](https://npmjs.com/package/chrome-tab-pin)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-tab-pin/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-tab-pin/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-tab-pin?style=social)](https://github.com/theluckystrike/chrome-tab-pin)

> Pin and unpin tabs in Chrome extensions.

**chrome-tab-pin** provides utilities to manage pinned tabs. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Overview

chrome-tab-pin provides utilities to manage pinned tabs.

## Features

- ✅ **Pin/Unpin** - Control tab pinning
- ✅ **Check State** - Get current pin state
- ✅ **Bulk Operations** - Pin/unpin multiple tabs
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-tab-pin
```

## Usage

```javascript
import { TabPin } from 'chrome-tab-pin';

// Pin a tab
await TabPin.pin(tabId);

// Unpin a tab
await TabPin.unpin(tabId);

// Check if pinned
const isPinned = await TabPin.isPinned(tabId);

// Toggle pin state
await TabPin.toggle(tabId);
```

## API

### Methods

| Method | Description |
|--------|-------------|
| `TabPin.pin(tabId)` | Pin tab |
| `TabPin.unpin(tabId)` | Unpin tab |
| `TabPin.toggle(tabId)` | Toggle pin state |
| `TabPin.isPinned(tabId)` | Check pinned state |
| `TabPin.getPinned(windowId?)` | Get pinned tabs |

## License

MIT — [Zovo](https://zovo.one)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/pin-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/pin-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [chrome-tab-mute](https://github.com/theluckystrike/chrome-tab-mute) - Tab muting
- [chrome-tab-groups-api](https://github.com/theluckystrike/chrome-tab-groups-api) - Tab groups
- [chrome-tab-discard](https://github.com/theluckystrike/chrome-tab-discard) - Tab discarding

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
