import { existsSync, mkdirSync, writeFile } from 'fs';
import { index, component, barrel } from './component_templates.js';

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (existsSync(dir)) throw new Error('A component with that name already exists.');

// create the folder
mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.jsx
writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// component.scss
writeFile(`${dir}/${name}.css`, index(name), writeFileErrorHandler);
// index.jsx
writeFile(`${dir}/index.js`, barrel(name), writeFileErrorHandler);

// Add "gc" command to package.json during post-installation
if (process.env.INIT_CWD) {
  const postInstallScriptPath = './postinstall.js';
  const postInstallScriptContent = `node ${postInstallScriptPath}`;

  fs.writeFileSync(postInstallScriptPath, `
    const fs = require('fs');
    const packageJsonPath = './package.json';
    const packageJson = require(packageJsonPath);
    packageJson.scripts = {
      ...packageJson.scripts,
      gc: 'node node_modules/react-auto-component/index.js'
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  `);

  // Update package.json with postinstall script
  const rootPackageJsonPath = `${process.env.INIT_CWD}/package.json`;
  const rootPackageJson = require(rootPackageJsonPath);

  if (!rootPackageJson.scripts) {
    rootPackageJson.scripts = {};
  }

  rootPackageJson.scripts.postinstall = postInstallScriptContent;
  fs.writeFileSync(rootPackageJsonPath, JSON.stringify(rootPackageJson, null, 2));
}
