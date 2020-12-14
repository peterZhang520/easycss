module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    // 模板名称
    // 命令行提问模块工具
    // array of inquirer prompts
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'component name',
        default: 'MyComponent',
      },
      {
        name: 'cptType',
        type: 'input',
        message: 'chioce a template type',
        default: 'plugin',
      },

      //   {
      //     name: 'cptType',
      //     type: 'multiselect',
      //     message: 'chioce only one ',
      //     instructions: false,
      //     choices: [{ default: 'component' }, { default: 'plugins' }]
      //   },
    ],
    // 所有模板文件
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-template/{{cptType}}/src/{{cptType}}.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.js',
        templateFile:
          'plop-template/{{cptType}}/__tests__/{{cptType}}.test.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile:
          'plop-template/{{cptType}}/stories/{{cptType}}.stories.hbs',
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
