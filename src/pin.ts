/**
 * Tab Pin — Pin and unpin tab utilities
 */
export class TabPin {
    /** Pin a tab */
    static async pin(tabId: number): Promise<void> { await chrome.tabs.update(tabId, { pinned: true }); }

    /** Unpin a tab */
    static async unpin(tabId: number): Promise<void> { await chrome.tabs.update(tabId, { pinned: false }); }

    /** Toggle pin state */
    static async toggle(tabId: number): Promise<boolean> {
        const tab = await chrome.tabs.get(tabId);
        const pinned = !tab.pinned;
        await chrome.tabs.update(tabId, { pinned });
        return pinned;
    }

    /** Pin active tab */
    static async pinActive(): Promise<void> {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab?.id) await this.pin(tab.id);
    }

    /** Pin all tabs matching domain */
    static async pinByDomain(domain: string): Promise<number> {
        const tabs = await chrome.tabs.query({});
        let count = 0;
        for (const tab of tabs) {
            if (tab.id && tab.url?.includes(domain) && !tab.pinned) { await this.pin(tab.id); count++; }
        }
        return count;
    }

    /** Unpin all tabs */
    static async unpinAll(): Promise<number> {
        const tabs = await chrome.tabs.query({ pinned: true });
        for (const tab of tabs) { if (tab.id) await this.unpin(tab.id); }
        return tabs.length;
    }

    /** Get all pinned tabs */
    static async getPinned(): Promise<chrome.tabs.Tab[]> { return chrome.tabs.query({ pinned: true }); }

    /** Auto-pin new tabs matching domains */
    static autoPinDomains(domains: string[]): void {
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete' && tab.url && !tab.pinned) {
                if (domains.some((d) => tab.url!.includes(d))) chrome.tabs.update(tabId, { pinned: true });
            }
        });
    }
}
