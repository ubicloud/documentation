# Ubicloud Documentation [![Prettier](https://github.com/ubicloud/documentation/actions/workflows/prettier.yml/badge.svg)](https://github.com/ubicloud/documentation/actions/workflows/prettier.yml)


[Ubicloud documentation](https://www.ubicloud.com/docs) is based on MDX and hosted by Mintlify.

### Preview

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install development dependencies, use the following command:

```shell
npm install
```

Run the following command at the root of your documentation:

```shell
mintlify dev
```

### Formatting

The documentation uses Prettier for formatting. To run the formatting, use the following command:

```shell
npx prettier . --write
```

### Publishing Changes

When you push changes to the `main` branch, they will be automatically published to the Ubicloud documentation.