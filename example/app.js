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


const TEST_POLL = 11823127

var got = strawpoll.get(TEST_POLL)

got.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

const mapping = strawpoll.options(TEST_POLL)

mapping.then((options) => {
    console.log("OPTIONS", options)
}).catch((error) => {
    console.log("OPTIONS ERROR", error)
})


var voted = strawpoll.vote(TEST_POLL, 117430681)

voted.then((response) => {
    console.log("VOTED", response)
}).catch((error) => {
    console.log("VOTED ERROR", error)
})
