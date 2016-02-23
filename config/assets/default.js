/**
 * Created by hanse on 1/22/2016.
 */
'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/wow/css/animate.css',
                'public/lib/tag-it/css/tagit.ui-zendesk.css',
                'public/lib/angular-toastr/dist/angular-toastr.css',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot?#iefix',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular'
            ],
            fonts: [
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.eot?#iefix',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                'public/lib/bootstrap/dist/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-messages/angular-messages.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angular-file-upload/angular-file-upload.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-toastr/dist/angular-toastr.tpls.js',
                'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
                'public/lib/wow/wow.js',
                'public/lib/tag-it/js/tagit.js',
            ],
            tests: ['public/lib/angular-mocks/angular-mocks.js']
        },
        css: [
            'modules/*/client/css/*.css'
        ],
        less: [
            'modules/*/client/less/*.less'
        ],
        sass: [
            'modules/*/client/scss/*.scss'
        ],
        js: [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js',
            'modules/*/client/*.js',
            'modules/*/client/**/*.js'
        ],
        views: ['modules/*/client/views/**/*.html'],
        templates: ['build/templates.js']
    },
    server: {
        gruntConfig: 'gruntfile.js',
        gulpConfig: 'gulpfile.js',
        allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
        models: 'modules/*/server/models/**/*.js',
        routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        sockets: 'modules/*/server/sockets/**/*.js',
        config: 'modules/*/server/config/*.js',
        policies: 'modules/*/server/policies/*.js',
        views: 'modules/*/server/views/*.html'
    }
};
