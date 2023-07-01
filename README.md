# React-auto-component

The `React-auto-component` package is a powerful script that allows you to effortlessly generate React components in both JSX and TSX (TypeScript) formats, using a simple command-line interface. Say goodbye to manual component creation and embrace the efficiency of automatic component generation!

## Installation

To install `React-auto-component`, run the following command:
`npm install react-auto-component`

## Configuration

After installation, you need to manually add a
`"gc": "node node_modules/react-auto-component/generate_component/index.js"`
property to the `"scripts"` object in the `package.json` file in the root of your project.

Example:

```json
"scripts": {
		"dev": "vite",
		"build": "vite build",
		"lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview",
		"gc": "node node_modules/react-auto-component/generate_component/index.js"
	},
...

```

## Usage

To generate a component using `React-auto-component`, run the following command in the root of your project:

`npm run gc Component [fileType] `

`Component`: Replace this parameter with the name of the desired component. Make sure to write the component name in camelCase or PascalCase.

`[fileType] (optional)`: Specify the file format for the component. You can choose between jsx (default) and tsx. If not specified, the default format will be jsx.

## Important

If the src/components directory does not exist, fear not! React-auto-component-ts will create it automatically for you before generating the requested component.

## Example Usage

Generating a component in JSX format:

`npm run gc Card`

The React-auto-component will do its magic and create the following directory structure:

```
/src
  /components
    /Card
      Card.jsx
      Card.scss
      index.jsx
```

The contents of the generated files will be as follows:

Card.jsx

```jsx
import "./Card.scss";

const Card = () => {
	return <div className="Card">Hello, I am a Card component.</div>;
};

export default Card;
```

Card.css

```scss
.Card {
	/* Add component styles here */
}
```

index.jsx

```jsx
import Card from "./Card.jsx";

export default Card;
```

## Generating a component in TSX format

`npm run gc Card tsx`

The React-auto-component will do its magic and create the following directory structure:

```
/src
  /components
    /Card
      Card.tsx
      Card.scss
      index.tsx
```

The contents of the generated files will be as follows:

Card.tsx

```typescript
import './${name}.scss';

// interface ${name}Props {} Add your props type

const ${name} = ({}: ${name}Props) => {
  return (
    <div className="${name}">Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
```

Card.scss

```css
.Card {
	/* add your styles here */
}
```

index.tsx

```typescript
import Card from "./Card.tsx";

export default Card;
```

Make sure to specify the component name as an argument to the gc command.

## Link to repository

https://github.com/PeppeTll/React-automated-component.git

## Link to linkedin

https://www.linkedin.com/in/peppetll/

## Author

This script was created by Giuseppe Talluto

## License

This project is licensed under the terms of the MIT license.
