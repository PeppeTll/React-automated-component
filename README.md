# react-auto-component

The `react-auto-component` package is a useful tool for automatically generating React components with a simple command line interface.

## Installation

To install the `react-auto-component` package, run the following command: `npm install react-auto-component`

## Configuration

After installation, you need to manually add a `"gc": "node node_modules/react-auto-component/generate_component/index.js"` property to the `"scripts"` object in the `package.json` file in the root of your project.

Example:

```json
"scripts": {
		"dev": "vite",
		"build": "vite build",
		"lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
		"preview": "vite preview",
		"gc": "node .generate_component"
	},
...

```

## Usage

To generate a component using react-auto-component, run the following command in the root of your project: npm run gc ComponentName

## Important

If the src/components directory does not exist when you run the npm run gc ComponentName command, the script will create it before generating the requested component.

## Example Usage

Let's say you want to generate a component called Card. Run the following command in the root of your project:

"npm run gc Card"

In this example, we are generating a component named "Card". The script will automatically create a Card directory inside the src/components folder of your project, along with the necessary files for the component, such as Card.jsx, Card.css, and index.js.

Make sure to specify the component name as an argument to the gc command.
