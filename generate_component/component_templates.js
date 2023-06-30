// index.css
export function index(name) {
  return `.${name} {
    /* add your style  */
  }`;
}

// component.js
export function component(name) {
  return `import './${name}.css';

const ${name} = () => {
  return (
    <div className="${name}">Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
`;
}

// index.js
export function barrel(name) {
  return `import ${name} from './${name}.js';

export default ${name};
`;
}
