//Common config and component registration for plansmic-init and plasmic-init-react
//Necessary to avoid duplication of this code in the two different plasmic init files

import { HelloWorld } from './components/plasmicCodeComponents/HelloWorld';

// Common configuration for Plasmic projects and components
export const plasmicConfig = {
  projects: [
    {
      id: "2p9oB1SXqjCfjY5GhqfXkW",
      token: "pUCg6B0WATaOclaotobprQoK6O9QeupmUOHsJeoRic9vOjAYnMLJlL5kpt9BsGVsahrXC39tJRSJ8f5zbT6w",
    },
  ],
  preview: true,
};

// Common function to register components
export function registerComponents(PLASMIC) {
  PLASMIC.registerComponent(HelloWorld, {
    name: 'HelloWorld',
    props: {
      verbose: 'boolean',
      children: 'slot'
    }
  });
}