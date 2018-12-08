import pkg from './package.json'
import serve from 'rollup-plugin-serve'

const pkgName =  pkg.name.replace(/@\w+\/(\w+)/, '$1');
const env = process.env.NODE_ENV || 'production';

export default [
  {
    input: 'src/index.js',
    output: {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: 'tableFirstNormalize'
    },
    plugins: env === 'development' ? [
      serve({
        contentBase: ['dist', 'test']
      })
    ] : []
  },
  {
    input: 'src/index.js',
    output: {
      file: `dist/${pkgName}.esm.js`,
      format: 'esm'
    },
  }
]
