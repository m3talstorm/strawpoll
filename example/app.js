const strawpoll = require('../lib/strawpoll')

var poll = strawpoll.create({
    title: 'My first poll',
    options: [
        'wow',
        'awesome',
        'amazing',
        'nice'
    ],
    multi: false,
    dupcheck: 'normal',
    captcha: false
})

poll.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

var poll2 = strawpoll.get(11822190)

poll2.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
