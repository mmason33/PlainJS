import BaseClass from '../../src/BaseClass'

export default class Video extends BaseClass {
    constructor(rootElement, args) {
        super(rootElement, args)
        console.log('video', this)

        this.setSrc()
        this.refClick()
    }

    setSrc() {
        this.rootElement.src = this.src
    }

    refClick() {
        this.refs.VideoButton.addEventListener('click', () => {
            this.rootElement.play()
        })
    }
}