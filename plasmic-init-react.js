//Alternate plasmic init using react instead of nextjs loader
//This is necessary for rending into plain html (nextjs loader causes webpack errors)
import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { plasmicConfig, registerComponents } from "./plasmic-settings";
export const PLASMIC = initPlasmicLoader(plasmicConfig);
registerComponents(PLASMIC);