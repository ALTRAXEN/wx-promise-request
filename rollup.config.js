import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const isProduction = process.env.NODE_ENV === 'production'

export default {
    entry: 'src/index.js',
    format: 'umd',
    moduleName: 'wx-request',
    plugins: [
        resolve({ jsnext: true, main: true }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        (isProduction && uglify())
    ],
    dest: 'dist/index.js',
}