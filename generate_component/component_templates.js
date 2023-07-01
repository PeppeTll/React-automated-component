// index.css/scss
export function index(name) {
  return `.${name} { 
      /* aggiungi il tuo stile */ 
    }`;
}

// component.js
export function component(name, indexType) {
  return `import './${name}.${indexType}';

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
  return `import ${name} from './${name}.jsx';

export default ${name};
`;
}