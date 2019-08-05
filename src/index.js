import System from './System'

/**
 * Create a reference to imported classes
 *
 * Example:
 *
 * import SomeClass from 'some-class'
 *
 * const classes = {
 *      SomeClass
 * }
 *
 * new System(classes)
 */
const system = new System()
system.init()