module.exports = {

    getConfig: function (env) {
        return {
            compress: {
                main: {
                    options: {
                        mode: 'gzip',
                        level: 9
                    },
                    files: [
                        {
                            expand: true,
                            src: [env.dist + '/public/**/*.js'],
                            ext: '.js.gz'
                        },
                        {
                            expand: true,
                            src: [env.dist + '/public/**/*.css'],
                            ext: '.css.gz'
                        }
                    ]
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-contrib-compress');
    }

};