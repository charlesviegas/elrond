module.exports = {

    getConfig: function (env) {
        return {
            requirejs: {
                minifyJs: {
                    options: {
                        baseUrl: env.src,
                        //mainConfigFile: env.src + '/main.js',
                        out: env.dist + '/public/main.js',
                        deps: env.deps,
                        generateSourceMaps: true,
                        preserveLicenseComments: false,
                        optimize: 'uglify2',
                        uglify2: {
                            mangle: {
                                except: ['$super']
                            }
                        }
                    }
                },
                minifyCss: {
                    options: {
                        baseUrl: env.src,
                        optimizeCss: 'standard',
                        cssIn: env.src + '/main.css',
                        out: env.dist + '/public/main.css',
                        preserveLicenseComments: false,
                        useSourceUrl: true
                    }
                }
            }
        };
    },

    loadNpmTasks: function (grunt) {
        grunt.loadNpmTasks('grunt-contrib-requirejs');
    }

};