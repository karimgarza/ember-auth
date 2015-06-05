import Ember from 'ember';
import Authenticator from 'simple-auth-oauth2/authenticators/oauth2';

export default Authenticator.extend({
    makeRequest: function(url, data) {
        var client_id = 'my-trusted-client';
        var client_secret = '';
        var headerAuth = "Basic " + btoa(client_id + ":" + client_secret);
        console.log(headerAuth);
                return Ember.$.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded',
                    headers: {
                        Authorization: headerAuth
                    }
                });
    }
});
