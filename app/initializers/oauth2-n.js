import OAuthCustomAuthenticator from 'ember-auth/authenticators/oauth2-n';

export default {
    name: 'oauth2-n',

    initialize: function(container) {
        container.register(
            'oauth2-n:oauth2-password-grant',
            OAuthCustomAuthenticator);
    }
};
