import BaseClass from '../src/BaseClass'

export default class Button extends BaseClass {
    constructor(rootElement, args) {
        super(rootElement, args)

        console.log('button', this);
    }
}