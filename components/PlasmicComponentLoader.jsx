import React from "react";

import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";

import { PLASMIC } from "../plasmic-init-react";

export function PlasmicComponentLoader({
  component,
  componentProps,
}) {

  if (typeof component !== "string") {
    throw new Error("component must be a string");
  }

  if (typeof componentProps !== "object") {
    throw new Error(
      "componentProps must be an object. See https://docs.plasmic.app/learn/react-api/#plasmiccomponent- for details"
    );
  }

  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component={component} componentProps={componentProps} />
    </PlasmicRootProvider>
  );
}

export default PlasmicComponentLoader;
