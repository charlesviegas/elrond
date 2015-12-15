module.exports = {

    getConfig: function (env) {
        return {
            jsdoc: {
                doc: {
                    src: [env.src + '/**/*.js', '!' + env.src +'/vendor/**'],
                    dest: env.dist + '/doc',
                    options: {
                        private: false
                    }
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-jsdoc');
    }

};