#!/usr/bin/env node
var clone = require('git-clone')
const { program } = require('commander')
var shell = require('shelljs');
var log = require('tracer').colorConsole()
program
    .version('1.0.0')
    .description('我的第一个nodejs cli模板生成器')
program
    .command('* <project>')
    .action(function(project) {
        log.info('exemple: createCli myproject')
        if (project) {
            let pwd = shell.pwd()
            log.info(`git clone package ${pwd}/${project}/ ...`)
            clone(`https://github.com/stevenkin/wormhole.git`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('build complate')
            })
        } else {
            log.error('command error, use createCli myproject')
        }
    })
program.parse(process.argv)