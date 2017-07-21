var gulp = require('../../../node_modules/gulp')
    , glob = require('../../../node_modules/glob')
    , chokidar = require('../../../node_modules/chokidar')
    , less = require('../../../node_modules/gulp-less')
    , timestamp = require('../../../node_modules/console-timestamp')
    , omt = require('../../../node_modules/@omnia/tooling');

var appConfig = require('./task.config.json');

omt.core.registerBuildTask({ type: omt.core.BuildType.BeforeBuild, order: 10, task: compileLess });

gulp.task('omf-watch-less', function () {
    process.on('uncaughtException', function (err) {
        console.log(err);
    });

    var watchLessTenantResource = chokidar.watch(appConfig.less.watch, {
        ignored: /[\/\\]\./,
        persistent: true
    });

    watchLessTenantResource.on('ready', function () {
        watchLessTenantResource
            .on('change', function (path) {
                console.log(utils.getCurrentDateTime() + " : compiling > " + path);
                compileAllLess();
                console.log(utils.getCurrentDateTime() + " : done");
            });
    });
});

function compileLess() {
    return new Promise(function (resolve, reject) {
        console.log(timestamp('[hh:mm:ss]') + ' Compile less running...');

        var totalFiles = 0;
        var countLoop = 0;

        for (var i = 0; i < appConfig.less.compile.tenantResource.files.length; i++) {
            glob(appConfig.less.compile.tenantResource.files[i], function (err, files) {
                countLoop++;
                totalFiles = totalFiles + files.length;

                if (appConfig.less.compile.tenantResource.files.length === countLoop && totalFiles === 0) {
                    console.log(timestamp('[hh:mm:ss]') + ' Compile less finished');
                    resolve();
                }

                for (var k = 0; k < files.length; k++) {
                    compile(files[k], function () {
                        totalFiles = totalFiles - 1;
                        if (totalFiles === 0 && countLoop === appConfig.less.compile.tenantResource.files.length) {
                            console.log(timestamp('[hh:mm:ss]') + ' Compile less finished');
                            resolve();
                        }
                    });
                }
            });
        }
        if (appConfig.less.compile.tenantResource.files.length === 0) {
            console.log(timestamp('[hh:mm:ss]') + ' Compile less finished');
            resolve();
        }
    });

    function compile(filePath, callBack) {
        var filePathFOrmatOS = filePath.replace(/\//g, "\\");

        gulp.src(filePath)
            //.pipe($.sourcemaps.init())
            .pipe(less({}))
            //.pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(filePath.substring(0, filePath.lastIndexOf('/'))))
            .on('end', function () {
                if (callBack !== undefined)
                    callBack();
            });
    }
}