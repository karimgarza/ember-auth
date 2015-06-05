// import Ember from 'ember';
//
// import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
//
// export default Ember.Controller.extend(LoginControllerMixin, {
//     authenticator: 'oauth2-n:oauth2-password-grant'
// });

import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'authenticator:oauth2-n'
});
