import * as collabs             from "@collabs/collabs";
import { IndexedDBDocStore }    from "@collabs/indexeddb";
import { LocalStorageDocStore } from "@collabs/local-storage";
import { TabSyncNetwork }       from "@collabs/tab-sync";
import { WebSocketNetwork }     from "@collabs/ws-client";

const Collabs = {
  collabs, 
  IndexedDBDocStore, LocalStorageDocStore,
  TabSyncNetwork, WebSocketNetwork,
}

// @ts-ignore allow "window.collabs"
window.collabs = Collabs

document.dispatchEvent(
  new CustomEvent('collabs',{ detail:Collabs })
)
