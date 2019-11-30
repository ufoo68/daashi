//必要なライブラリを読み込みます
const five = require('johnny-five')
const express = require('express');

const motor = { right: 6, left: 5, down: 2, up: 3, front: 8, back: 9 }

//ボード
const board = new five.Board()
board.on('ready', () => {
    main()
})

const main = () => {
    const up = new five.Led(motor.up)
    const down = new five.Led(motor.down)
    const front = new five.Led(motor.front)
    const back = new five.Led(motor.back)
    const right = new five.Led(motor.right)
    const left = new five.Led(motor.left)

    const app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.listen(3000)

    app.post('/', (req, _) => {
        switch (req.body.type) {
            case 'front':
                req.body.direction === 'go' ? front.on() : front.stop()
                break
            case 'back':
                req.body.direction === 'go' ? back.on() : back.stop()
                break
            case 'up':
                req.body.direction === 'go' ? up.on() : up.stop()
                break
            case 'down':
                req.body.direction === 'go' ? down.on() : down.stop()
                break
            case 'right':
                req.body.direction === 'go' ? right.on() :right.stop()
                break
            case 'left':
                req.body.direction === 'go' ? left.on() : left.stop()
                break
        }
    })
}