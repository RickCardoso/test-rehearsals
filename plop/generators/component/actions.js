module.exports = [
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
    templateFile: 'plop/templates/Component/Component.tsx.hbs',
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
    templateFile: 'plop/templates/Component/Component.styles.hbs',
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
    templateFile: 'plop/templates/Component/Component.spec.tsx.hbs',
  },
];
