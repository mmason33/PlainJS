import BaseClass from '../src/BaseClass'

export default class Video extends BaseClass {
    constructor(rootElement, args) {
        super(rootElement, args)
        console.log('video', this)
    }
}