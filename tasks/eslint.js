module.exports = {

    getConfig: function (env) {
        return {
            eslint: {
                client: {
                    src: [env.src + '/**/*.js', '!' + env.src + '/base/**'],
                    options: {
                        outputFile: env.dist + '/eslint',
                        configFile: ".eslintrc.json"
                    }
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('gruntify-eslint');
    }

};