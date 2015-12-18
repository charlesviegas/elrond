module.exports = {

    getConfig: function (env) {
        return {
            jsdoc: {
                doc: {
                    src: [env.src + '/**/*.js', '!' + env.src + '/base/**'],
                    dest: env.dist + '/doc',
                    options: {
                        private: false
                    }
                }
            },

            ngdocs: {
                options: {
                    dest: env.dist + '/doc'
                },
                all: {
                    src: [env.src + '/**/*.js', '!' + env.src + '/base/**']
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-jsdoc');
        grunt.loadNpmTasks('grunt-ngdocs');
    }

};
