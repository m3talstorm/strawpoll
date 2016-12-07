//
const request = require('request-promise');
//
const URL = 'https://strawpoll.me/api/v2/polls'

const HEADERS = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'https://github.com/m3talstorm/strawpoll'
}

module.exports = {
    //
    create: function(options) {

        return request.post({
            url: URL,
            headers: HEADERS,
            followAllRedirects: true,
            body: options,
            json: true
        })
    },
    //
    get: function(id) {

        return request.get({
            url: `${URL}/${id}`,
            headers: HEADERS,
            followAllRedirects: true,
            json: true
        })
    }
}
