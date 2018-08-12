// @flow

import StyleSheet from 'universal-stylesheet'
/* eslint-disable import/no-unresolved */
import _InlineStyle from '../models/InlineStyle'
import _StyledNativeComponent from '../models/StyledNativeComponent'
import _constructWithOptions from '../constructors/constructWithOptions'

import css from '../constructors/css'
import ThemeProvider from '../models/ThemeProvider'
import withTheme from '../hoc/withTheme'
import isStyledComponent from '../utils/isStyledComponent'

import type { Target } from '../types'

const constructWithOptions = _constructWithOptions(css)
const InlineStyle = _InlineStyle(StyleSheet)
const StyledNativeComponent = _StyledNativeComponent(
  constructWithOptions,
  InlineStyle
)
const styled = (tag: Target) => constructWithOptions(StyledNativeComponent, tag)

/* React native lazy-requires each of these modules for some reason, so let's
*  assume it's for a good reason and not eagerly load them all */
// const aliases = `View Text Image`

/* Define a getter for each alias which simply gets the reactNative component
 * and passes it to styled */
// aliases.split(/\s+/m).forEach(alias =>
//   Object.defineProperty(styled, alias, {
//     enumerable: true,
//     configurable: false,
//     get() {
//       const packageName = `rax-${alias.toLowerCase()}`
//       const component = _interopDefault(require(packageName))
//       return styled(component)
//     },
//   })
// )

export { css, isStyledComponent, ThemeProvider, withTheme }
export default styled
