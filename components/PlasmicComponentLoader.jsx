import React from "react";

import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";

import { PLASMIC } from "../plasmic-init";

export function PlasmicComponentLoader({
  projectId,
  publicToken,
  preview,
  component,
  componentProps,
}) {
  if (typeof projectId !== "string") {
    throw new Error("projectId must be a string");
  }

  if (typeof publicToken !== "string") {
    throw new Error("publicToken must be a string");
  }

  if (typeof preview !== "boolean") {
    throw new Error("preview must be a boolean");
  }

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
