var entity = {
    user: {
        id:0,
        uuid:'',
        password:'',
        email:'',
        email_validated:0,
        createtime:'',
        last_active:'',
        save_flg:0,
        save_days:0,
        status:0,
        token:''       
    },
    task: {
        id:0,
        taskname:'',
        createtime:'',
        threadNum:0,
        start_flg:0,
        modelList:'',
        sceneList:'',
        projectList:'',
        wordList:'',
        user_email:'',
        dbPath:''          
    },
    file: {
        id:0,
        file_name:'0',
        file_sha1:'0',
        file_addr:'0',
        create_at:'0',
        task_uuid:'0',
              
    },
    voice: {
        id:0,
        voice:'0',
        task:'0',  
    },
}

module.exports = entity;