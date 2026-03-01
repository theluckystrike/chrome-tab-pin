# chrome-tab-pin — Tab Pinning for Extensions
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-tab-pin`

Pin, unpin, toggle, domain-based pinning, and auto-pin rules.

```typescript
import { TabPin } from 'chrome-tab-pin';
await TabPin.pinActive();
await TabPin.pinByDomain('github.com');
TabPin.autoPinDomains(['gmail.com', 'slack.com']);
```
MIT License
