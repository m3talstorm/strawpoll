//
const request = require('request-promise');
const cheerio = require('cheerio');
const Promise = require("bluebird");
//
const URL = 'https://strawpoll.me'
const API = `${URL}/api/v2/polls`

const HEADERS = {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'https://github.com/m3talstorm/strawpoll'
}

module.exports = {
    // Create a new poll with the given options
    create: function(options) {

        return request.post({
            url: API,
            headers: HEADERS,
            followAllRedirects: true,
            body: options,
            json: true
        })
    },
    // Fetch the information about a polll with the given id
    get: function(id) {

        return request.get({
            url: `${API}/${id}`,
            headers: HEADERS,
            followAllRedirects: true,
            json: true
        })
    },
    // Get the options (human-readable name) to option id mapping
    options: function(id) {
        //
        return new Promise(function (resolve, reject) {

            request.get({
                url: `${URL}/${id}`,
                headers: HEADERS,
                followAllRedirects: true,
                json: true
            }).then(function(response) {
                //
                const $ = cheerio.load(response)
                //
                const ids = {}
                //
                $('input[id^="field-options-"]').filter(function() {
                    //
                    const data = $(this)
                    //
                    const name = data.attr('id').replace('field-options-', '')
                    //
                    ids[name] = data.val()
                })
                //
                resolve(ids)

            }).catch(reject)

        });
    },
    // Vote for an option on a given poll
    vote: function(id, votes) {

        return request.post({
            url: `${URL}/${id}`,
            headers: HEADERS,
            followAllRedirects: true,
            body: {
                options: votes
            },
            json: true
        })

    },

}
