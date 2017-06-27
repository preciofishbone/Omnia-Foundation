var glob = require('glob')
processPath = process.cwd().replace(/\\/g, "/");

require('@omnia/tooling');

loadTasks();

function loadTasks() {
    var files = glob.sync('TaskRunner/tasks/**/task.js')
    var directories = [];
    for (var i = 0; i < files.length; i++) {
        require(processPath + '/' + files[i]);
    }
}