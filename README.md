# React-auto-component

"The `React-auto-component` package is a powerful script that allows you to effortlessly generate React components in both JSX and TSX (TypeScript) formats, using a simple command-line interface. Say goodbye to manual component creation and embrace the efficiency of automatic component generation!

To use the script, provide the following parameters:

- The component name (required)
- The file type: empty string, 'jsx', or 'tsx' (default: 'jsx')
- The index type: empty string, 'css', or 'scss' (default: 'css')

The second parameter can be an empty string, 'jsx', or 'tsx'. If it is not an empty string, it must be one of 'jsx' or 'tsx'.

The third parameter can be an empty string, 'css', or 'scss'. If it is not an empty string, it must be followed by 'jsx' or 'tsx'. For example: 'jsx css', 'jsx scss', 'tsx css' or 'tsx scss'.

The script will create the necessary component files and directories for you automatically. Enjoy the convenience of generating React components effortlessly!"

## Installation

To install `React-auto-component`, run the following command:

```nodejs
npm install react-auto-component

```

## Configuration

After installation, you need to manually add a

```json
"gc": "node node_modules/react-auto-component/generate_component/index.js"

```

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

```nodejs
npm run gc Component [fileType] [indexType]

```

`Component`: Replace this parameter with the name of the desired component. Make sure to write the component name in camelCase or PascalCase.

`[fileType] (optional)`: Specify the file format for the component. You can choose between jsx (default) and tsx. If not specified, the default format will be jsx.

`[indexType] (optional)`: Specify the file format for the component. You can choose between css (default) and scss. If not specified, the default format will be css. If it is not an empty string, it must be followed by 'jsx' or 'tsx'. For example: 'jsx css', 'jsx scss', 'tsx css' or 'tsx scss'.

## Important

If the src/components directory does not exist, fear not! React-auto-component-ts will create it automatically for you before generating the requested component.

## Example Usage

Generating a component in JSX format:

```nodejs
npm run gc Card

```

The React-auto-component will do its magic and create the following directory structure:

```
/src
  /components
    /Card
      Card.jsx
      Card.css
      index.jsx
```

The contents of the generated files will be as follows:

Card.jsx

```jsx
import "./Card.css";

const Card = () => {
	return <div className="Card">Hello, I am a Card component.</div>;
};

export default Card;
```

Card.css

```css
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

```nodejs
npm run gc Card tsx

```

The React-auto-component will do its magic and create the following directory structure:

```
/src
  /components
    /Card
      Card.tsx
      Card.css
      index.tsx
```

The contents of the generated files will be as follows:

Card.tsx

```typescript
import './${name}.css';

// interface ${name}Props {} Add your props type

const ${name} = ({}: ${name}Props) => {
  return (
    <div className="${name}">Hello 👋, I am a ${name} component.</div>
  );
};

export default ${name};
```

Card.css

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
