import System from './System'
import BaseClass from './BaseClass'

import Video from '../test/Video'
import Button from '../test/Button'


const system = new System({
    Video,
    Button,
})
system.init()