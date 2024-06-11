import * as collabs             from "@collabs/collabs"
import { IndexedDBDocStore }    from "@collabs/indexeddb"
import { LocalStorageDocStore } from "@collabs/local-storage"
import { TabSyncNetwork }       from "@collabs/tab-sync"
import { WebSocketNetwork }     from "@collabs/ws-client"

const Collabs = {
  collabs, 
  IndexedDBDocStore, LocalStorageDocStore,
  TabSyncNetwork, WebSocketNetwork,
}

export *                        from "@collabs/collabs"
export { IndexedDBDocStore }    from "@collabs/indexeddb"
export { LocalStorageDocStore } from "@collabs/local-storage"
export { TabSyncNetwork }       from "@collabs/tab-sync"
export { WebSocketNetwork }     from "@collabs/ws-client"

// @ts-ignore allow "window.collabs"
window.collabs = Collabs

document.dispatchEvent(
  new CustomEvent('collabs',{ detail:Collabs })
)
