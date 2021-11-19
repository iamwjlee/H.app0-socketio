
const express=require('express')
const fs=require('fs').promises
const app=express()
const server=require('http').createServer(app)
const sqlite3=require('sqlite3').verbose();
let io=require('socket.io')(server,{cors:{origin:"*"}})



server.listen(1605,()=>{
    console.log('Listening on port 1605')
})


app.use(express.static(__dirname +'/public'))
app.get('/',(req,res)=>{
    fs.readFile(__dirname + '/index.html').then(contents=>{
        res.setHeader("Content-Type","text/html",)
        //res.writeHead(200, {'Content-Type':'text/plain; charset=euc-kr' })
        res.writeHead(200)
        res.end(contents)
    })
    .catch(err=>{
        res.writeHead(500)
        res.end(err)
        return;
    })
    //  //res.send('Hello World')
    //  res.writeHead(200,{'Content-Type':'text/html'})
    //  res.write('<html> <h1>Hello node</h1> </html>')
    //  res.end()


})
app.get('/data',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: "Hello Json"}));  
    res.end();  

})

app.get('/db',(req,res)=>{
    let db = new sqlite3.Database('./db/chinook.db');
    let arryData=[]
    
    //db.serialize(()=>{
    //    db.each(`select name,id from student`,(err,row)=>{
    //        console.log(row.id + '\t'+ row.name)
    //    })
    //    console.log('db.serialize')
    //})
    sql = `select *,rowid from student`;
    let rowsArray=[]
    //let reply=''
    let name=''
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        name=rows[0].name
        rows.forEach((row) => {
          
          console.log(row);
          rowsArray.push(row)
          //reply=row
          //reply=rowsArray[0]
  
        });
        let who='wjlee002'
        db.each(`select name,id from student WHERE name = '${who}'`,(err,row)=>{
            console.log( 'db.each: id='+ row.id + '\t name='+ row.name)
        })


        console.log('name '+name)
        db.close((err)=>{
          if(err) return console.log(err.message)
          console.log('Close the database connection')
        })
        console.log('name '+name)

        res.send(rowsArray)
        //return
  
    });
  



    //const query=`select name,id from student`

    console.log('How can I show db row datas in html?')
    //arryData.push('aaaa')
    //res.send('home '+ arryData) //

    //res.send('Home')

})


let position ={
    x: 200,
    y: 200
};


io.on("connection",socket=>{
    console.log("socket io connection")
    socket.on("move",data=>{
        switch(data) {
            case "left":
                position.x -=5;
                io.emit("position",position);
                break;
            case "right":
                position.x +=5;
                io.emit("position",position);
                break;
            case "up":
                position.y -=5;
                io.emit("position",position);
                break;
            case "down":
                position.y +=5;
                io.emit("position",position);
                break;
            

        }
    })
    socket.on("db",data=>{
        let db = new sqlite3.Database('./db/chinook.db');

        switch(data) {
            case "student":
                sql = `select *,rowid from student`;
                let rowsArray=[]

                db.all(sql, [], (err, rows) => {
                    if (err) {
                      throw err;
                    }
                    rows.forEach((row) => {
                      console.log(row);
                      rowsArray.push(row)
                    });
            
                    db.close((err)=>{
                      if(err) return console.log(err.message)
                      console.log('Close the database connection')
                    })
                    io.emit("db",rowsArray);
              
                });                
                break;
            case "tables":
                //let db = new sqlite3.Database('./db/chinook.db');
                sql=`select name from sqlite_master where type='table'`
                let tables=[]
                db.all(sql,[],(err,rows)=>{
                    rows.forEach((row)=>{
                        console.log(row);
                        tables.push(row)
                    })
                    db.close((err)=>{
                        if(err) return console.log(err.message)
                        console.log('Close the database connection')
                    })
                    io.emit("tables",tables);
                })
                break;
            case "create":
                //db.run(`create table setup(ip text,van integer,dmode integer,pmode integer,literlimit integer, cost integer )`);
                //let make simple adj tracking table
                //db.run(`create table adj( code integer,pumpId integer, adj integer,date text )`);
                db.close();
                console.log('table adj created'+db)
                //console.log(db)
            
                break;
            case "insert":
                
                // db.run(`insert into setup values("192.168.0.101",1,1,1,99,90000)`, function (err) {
                //     if (err) { return console.log(err.message); }
                // });
                db.run(`insert into adj values(100,1,1185,datetime('now','localtime'))`);                
                db.close();
                console.log('table adj values inserted')
                break;
            case "update-setup":
                let ip="192.168.0.103"
                sql = `update setup set ip="${ip}" `;
                db.run(sql)
                db.close()
                console.log('table update-setup'+ip)
                break;
                
        }
    })
    socket.on("adj",data=>{
        let db = new sqlite3.Database('./db/chinook.db');
        let code=data.code
        let id=data.id
        let adj=data.adj
        console.log('adj:'+code+' '+id+' '+adj)
        db.run(`insert into adj values("${code}","${id}","${adj}",datetime('now','localtime'))`);                
        db.close();
        console.log('table adj values inserted')



    })
    socket.on("show-adj",data=>{
        console.log('Let show adj db')
        let db = new sqlite3.Database('./db/chinook.db');
        sql = `select * from adj`;
        let rowsArray=[]
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            rows.forEach((row) => {
              
              console.log(row);
              rowsArray.push(row)
              //reply=row
              //reply=rowsArray[0]
      
            });
            db.close()
            io.emit("show-adj-resp",rowsArray);

      
        });
    



    })
})
