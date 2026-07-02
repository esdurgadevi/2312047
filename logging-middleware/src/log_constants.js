export const CONSTANTS = {
    LOG_API : 'http://4.224.186.213/evaluation-service/logs',
    stack : ['backend','frontend'],
    level : ['debug','info','warn','error','fatal'],
    package : {
        backend : ['cache','contoller','cron_job','db','domain','handler','repository','route','service'],
        frontend : ['api','component','hook','page','state','style'],
        shared : ['auth','config','middleware','utils']
    }
}