import System from '../src/System'

import Video from './test/Video'
import Button from './test/Button'

const system = new System({
    Video,
    Button
})
system.init()