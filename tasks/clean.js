module.exports = {

    getConfig: function (env) {
        return {
            clean: [env.dist]
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-contrib-clean');
    }

};
