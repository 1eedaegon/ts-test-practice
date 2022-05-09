module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	extends: ["plugin:@typescript-eslint/recommended"],
	env: {
		node: true,
	},
	ignorePatterns: ["dist", "**/*.js"],
	rules: {
		"no-console": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/no-unused-vars": "warn",
	},
};
