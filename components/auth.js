import obj from  '../config.js';

app.get('/login', function (req, res) {
    var scopes = 'user-read-private user-read-email playlist-read-collaborative';
    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + obj.spotify.my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(obj.spotify.scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(obj.spotify.encoded_redirect_uri));
});


// 'https://accounts.spotify.com/authorize?response_type=code&client_id=a47686c131df407ba2364306dd25b6c8&scope=user-read-private-user-read-email-playlist-read-collaborative + encodeURIComponent(obj.spotify.scopes) : '') +'&redirect_uri=' + encodeURIComponent(obj.spotify.encoded_redirect_uri)
// url for OAuthentication:  --> 'https://accounts.spotify.com/authorize?response_type=&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https%3A%2F%2Ffreiolabs.com'
// url for OAuthentication:  --> 'https://accounts.spotify.com/authorize?response_type=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https%3A%2F%2Ffreiolabs.com'

// 2.0 url =
// https://accounts.spotify.com/en/authorize?response_type=code&client_id=a47686c131df407ba2364306dd25b6c8&scope=playlist-read-collaborative&redirect_uri=https:%2F%2Ffreiolabs.com

curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A -d refresh_token=AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A https://accounts.spotify.com/api/token
curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=refresh_token -d refresh_token=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M https://accounts.spotify.com/api/token
curl -H "Authorization: Basic YTQ3Njg2YzEzMWRmNDA3YmEyMzY0MzA2ZGQyNWI2Yzg6Y2U5YTE0MWM4YTMwNDQ0Njk1YTZjZDc0YzIxZTIzNzI=" -d grant_type=authorization_code -d code=AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M https://accounts.spotify.com/api/token


refresh_token = AQBrzk5Hrvabt_6zglVkn9nv9qhxJNbdpCTP33E6l7I-dA_gCElQW59vuJjyohK3eysb3YVAvNQllvQHMA-gllHVMYS6_44LJM8p7DNs6JLG-3buP2ubWZWs9ZJpbCMBF92qHDYWBVw99tFZcJ0E87b3A7F-HRsKy3Kgl1DIX4msc6zDUglFv7swW8WwFvjsaCY_hwWqR18H-zG80Yj1vZKvO-_qgY4M

AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A

AQC0_cGk9Xed_PdqG5OWu9rk4738dxZahS0GjAx0uRIe5ihSU266ywNZwwbN8p_rDONisXCgKQvJuduoDGkzt44u0qFzlWzr-xjxiifbzfM7fy7InRyXd_JCjyK_NPqyZBuQzrFijA61CF2M_vBUkG5tZNmkVw-rMUHkaTWB58UvaFTyTJLqVWa93KTxI8hFN27iBES6Dnsaln1lhB4HqcON4fH15z9A