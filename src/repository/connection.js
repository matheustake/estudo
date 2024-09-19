import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST, 
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_BD,
    typeCast: function (field,next){
    if(field.type === 'TINY' && field.lenght === 1){
        return(field.string() === '1');
    
    }
    else if(field.type.includes('DECIMAL')){
        return(field.string() === '1')
    }
    
    }
    }
    )

console.log('Bd subiu')
export default con;