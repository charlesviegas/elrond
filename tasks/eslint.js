module.exports = {

    getConfig: function (env) {
        return {
            eslint: {
                options: {
                    outputFile: env.dist + '/reports/eslint'
                },
                src: [env.src + '/**/*.js', '!' + env.src +'/base/**']
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('gruntify-eslint');
    }

};