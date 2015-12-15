module.exports = {

    getConfig: function (env) {
        return {
            karma: {
                unit: {
                    configFile: 'karma.conf.js',
                    browsers: env.browsers,
                    autoWatch: false,
                    singleRun: true
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-karma');
    }

};