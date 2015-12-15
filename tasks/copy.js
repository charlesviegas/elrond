module.exports = {

    getConfig: function (env) {
        return {
            copy: {
                all: {
                    expand: true,
                    cwd: env.src,
                    src: [
                        'vendor/bootstrap/dist/fonts/**',
                        'vendor/requirejs/require.js'
                    ],
                    dest: env.dist + '/public'
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-contrib-copy');
    }

};