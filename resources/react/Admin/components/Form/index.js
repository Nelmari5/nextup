
import loadable from '@loadable/component';
const { useForm } = require('./useForm')
export const Tags = loadable(() => import(/* webpackChunkName: "Tags" */'./Tags'));
export const Input = loadable(() => import(/* webpackChunkName: "Input" */'./Input'));
export const Button = loadable(() => import(/* webpackChunkName: "Button" */'./Button'));
export { useForm }