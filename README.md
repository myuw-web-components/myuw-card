# myuw-card

![MyUW Card](myuw-card.png)

## Example Usage

```html
<myuw-card-frame size="full">
  <myuw-card-header
    slot="myuw-card-header"
    title="Course Search and Enroll"
  ></myuw-card-header>
  <myuw-card-footer
    slot="myuw-card-footer"
    text="Launch app"
    href="https://www.google.com"
  ></myuw-card-footer>
</myuw-card-frame>
```

## Contributing

### Developer Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/) (optional but recommended)
* npm (if not using Yarn)

Install dependencies:

```sh
$ yarn install
# or
$ npm install
```

Run the development server:

```sh
$ yarn start
# or
$ npm start
```

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) will be install
and are already configured. It is recommended that you use them.
