//Modified version of the standard plasmic init for nextjs
//Works the same way as normal but the config and component registration are written in plasmic-settings.js
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { plasmicConfig, registerComponents } from "./plasmic-settings";
export const PLASMIC = initPlasmicLoader(plasmicConfig);
registerComponents(PLASMIC);