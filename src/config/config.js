import path from 'path';

const environmentConfig = require(path.join(__dirname, `env/${process.env.NODE_ENV}`)).default;
const config = { 
  ...environmentConfig 
}

export default config;
