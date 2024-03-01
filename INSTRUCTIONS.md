# How to convert a plasmic nextjs project to this

0. Create the plasmic project, publish to github nextjs as normal. Then open the project from github in vs code. run npm install.
1. Install webpack and babel: run npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react
2. create a webpack.config.js file in the root of the project with contents as shown.
3. create plasmic-settings.js and move most of what's in plasmic-init.js to there
4. modify plasmic-init.js to use the new plasmic-settings.js as shown there
5. create plasmic-init-react.js which should contain same as plasmic-init.js but use @plasmicapp/loader-react instead of @plasmicapp-loader-nextjs
6. modify package.json. add build-components script, add the build-components script to build as well
7. add helper function renderReactComponent.js to public
8. Add code components as needed, registering them in plasmic-settings.js instead of plasmic-host.js
9. Update app host in Plasmic
10. Add PlasmicComponentLoader.js (shouldn't need to change)
11. add components-export.js and choose what components and export PlasmicCOmponentLoader.js at minimum
12. run npm run build-components and test it out as shown in tmp.html
13. Run npm run build and it should all work
14. Deploy to vercel or whatever as normal