
const childProcess = require('child_process');
const args = [ 'install' ];
const opts = { stdio: 'inherit', shell: true };

childProcess.spawnSync('npm', args, {...opts, cwd: 'client'});
childProcess.spawnSync('npm', args, {...opts, cwd: __dirname});