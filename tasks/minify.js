module.exports = {

    getConfig: function (env, grunt) {

        var config = grunt.file.readJSON('./app/config.json');

        return {
            requirejs: {
                minifyJs: {
                    options: {
                        name: 'main',
                        baseUrl: env.src,
                        paths: config.paths,
                        shim: config.shim,
                        out: env.dist + '/public/main.js',
                        deps: config.extensions.concat(config.components),
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