// index.scss
export function index(name) {
  return `.${name} {
    /* add your style  */
  }`;
}

// component.tsx
export function component(name) {
  return `import './${name}.scss';

// interface ${name}Props {} Add your props type

const ${name} = ({}: ${name}Props) => {
  return (
    <div className="${name}">Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
`;
}

// index.tsx
export function barrel(name) {
  return `import ${name} from './${name}.tsx';

export default ${name};
`;
}