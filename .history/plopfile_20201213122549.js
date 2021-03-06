module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    // 模板名称
    // 命令行提问模块工具
    // Plop uses the inquirer.js
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'component name',
        default: 'MyComponent',
      },

      {
        name: 'cptType',
        type: 'multiselect',
        message: 'chioce only one ',
        instructions: false,
        choices: [
          { title: 'component', value: 'component'},
          { title: 'plugins', value: 'plugins' },
        ],
      },
    ],
    // 所有模板文件
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-template/{{cptType}}/src/component.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-template/{{cptType}}/__tests__/component.test.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-template/{{cptType}}/stories/component.stories.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-template/{{cptType}}/index.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LICENSE',
        templateFile: 'plop-template/{{cptType}}/LICENSE',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/{{cptType}}/package.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-template/{{cptType}}/README.hbs',
      },
    ],
  })
}
