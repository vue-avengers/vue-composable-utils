const chalk = require('chalk');
const { promisify } = require('util');
const fs = require('fs');
const { configs, utils, paths } = require('./config');

const mkdir = promisify(fs.mkdir);

async function build() {
  await mkdir(paths.dist, { recursive: true });
  // eslint-disable-next-line
  console.log(chalk.cyan('Generating ESM build...'));
  await utils.writeBundle(configs.esm, 'vue-composable-utils.esm.js');
  // eslint-disable-next-line
  console.log(chalk.cyan('Done!'));

  // eslint-disable-next-line
  console.log(chalk.cyan('Generating UMD build...'));
  await utils.writeBundle(configs.umd, 'vue-composable-utils.js', true);
  // eslint-disable-next-line
  console.log(chalk.cyan('Done!'));
}

build();
