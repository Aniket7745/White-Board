"use client";

import "tldraw/tldraw.css";
import { Tldraw, DefaultStylePanel } from "tldraw";
import { useStorageStore } from "./useStorageStore";
import { useSelf } from "@liveblocks/react/suspense";
import { Avatars } from "@/components/Avatars";




export function StorageTldraw() {
  
  const id = useSelf((me) => me.id);
  const info = useSelf((me) => me.info);

  const store = useStorageStore({
    user: { id, color: info.color, name: info.name },
  });

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Tldraw
        store={store}
        components={{
          
          StylePanel: () => (
            <div
              style={{
                display: "flex-column",
                marginTop: 4,
              }}
            >
              <Avatars />
              <DefaultStylePanel />
             
            </div>
          ),
        }}
        autoFocus
      />
    </div>
  );
}
