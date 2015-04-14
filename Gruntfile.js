module.exports = function(grunt) {

    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),

        express: {
            all: {
                options: {
                    bases: ['c:\\wamp\\www\\test\\brbn'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:8080/index.html'
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'], 
                tasks: ['uglify', 'compass'],
                options: {
                    /* spawn: false, */
                    livereload: true
                }
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['*.html'],
                /* tasks: ['compass'],*/
                options: {
                    livereload: true
                }
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production-min.js'
            }
        }

    });
    /* 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    */
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);
};