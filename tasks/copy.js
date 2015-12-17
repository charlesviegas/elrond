module.exports = {

    getConfig: function (env) {
        return {
            copy: {
                all: {
                    expand: true,
                    cwd: env.src,
                    src: [
                        'index.html',
                        'config.json',
                        'base/bootstrap/dist/fonts/**',
                        'base/requirejs/require.js'
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
