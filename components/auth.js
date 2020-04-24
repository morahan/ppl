var obj = require('../config.js');
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = obj.spotify.client_id; // Your client id
var client_secret = obj.spotify.client_secret_id; // Your secret
var redirect_uri = obj.spotify.redirect_uri; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser());

app.get('/login', function (req, res) {
    // res.send("working ==== ")
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'user-read-private user-read-email playlist-read-collaborative';
    res.send('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    );
    // res.redirect('https://accounts.spotify.com/authorize?' +
    //     querystring.stringify({
    //         response_type: 'code',
    //         client_id: client_id,
    //         scope: scope,
    //         redirect_uri: redirect_uri,
    //         state: state
    //     })
    // );
});

app.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect('/#' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.get('/refresh_token', function (req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

console.log('Listening on 3000');
app.listen(3000);

// ==== my code below
// app.get('/login', function (req, res) {
//     var scopes = 'user-read-private user-read-email playlist-read-collaborative';
//     res.redirect('https://accounts.spotify.com/authorize' +
//         '?response_type=code' +
//         '&client_id=' + obj.spotify.my_client_id +
//         (scopes ? '&scope=' + encodeURIComponent(obj.spotify.scopes) : '') +
//         '&redirect_uri=' + encodeURIComponent(obj.spotify.encoded_redirect_uri));
// });


// 'https://accounts.spotify.com/authorize?response_type=code&client_id=a47686c131df407ba2364306dd25b6c8&scope=user-read-private-user-read-email-playlist-read-collaborative + encodeURIComponent(obj.spotify.scopes) : '') +'&redirect_uri=' + encodeURIComponent(obj.spotify.encoded_redirect_uri)
// url for OAuthentication:  --> 'https://accounts.spotify.com/authorize?response_type=&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https%3A%2F%2Ffreiolabs.com'
// url for OAuthentication:  --> 'https://accounts.spotify.com/authorize?response_type=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https%3A%2F%2Ffreiolabs.com'

// 2.0 url =
// https://accounts.spotify.com/en/authorize?response_type=code&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https:%2F%2Ffreiolabs.com

// curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A -d refresh_token=AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A https://accounts.spotify.com/api/token
// curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=refresh_token -d refresh_token=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M https://accounts.spotify.com/api/token
// curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=authorization_code -d code=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M https://accounts.spotify.com/api/token


// refresh_token = AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M

// AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A

// AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A