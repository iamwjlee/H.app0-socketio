
const express=require('express')
const fs=require('fs').promises
const app=express()
const server=require('http').createServer(app)
const sqlite3=require('sqlite3').verbose();
let io=require('socket.io')(server,{cors:{origin:"*"}})


//org 1605
server.listen(1605,()=>{
    console.log('Http & Socket.io ready for Listening on port 1605')
})


let freerunning=0
//var clients=[]
let responseMsg
const net=require('net')
const tcp=net.createServer(client=>{
    freerunning++
    //clients.push(client);

    console.log('Tcp Client connected'+'['+freerunning+']')
    client.on('data',function(data){
        
        let ipAddr=client.remoteAddress.replace(/^.*:/,'');
        //console.log('ipAddr='+ipAddr)
		console.log('<<-- Data recevied : ' + data + ' '+ ipAddr);
        //console.log('clients:'+clients.length)
        responseMsg='OKay:0'
		// let sender=this;
		// clients.forEach(function(client){
		// 	if(client==sender)
		// 		client.write(responseMsg);
		// 	//console.log('>>-- client.write by forEach'+' clients.length='+clients.length);
		// 	return false;

		// });

        client.write(responseMsg)

        let ss=""+data
        let sp= ss.split(':')

        io.sockets.emit('tcp-res',{ip:ipAddr,id:sp[2],cnt:freerunning})
    })
	client.on('end', function () {
		///console.log("client end disconnected -- shown");
	});

    client.on('close',function(){
        console.log("client close disconnected -- shown");
    })
    client.on('error',function(err){
        console.log('client Error: ', JSON.stringify(err));

    })

})
tcp.listen(1600,function() {
    console.log('tcp server listening...'+JSON.stringify(tcp.address()))
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
    console.log("socket io connection:"+socket.id) //socket io connection:KpIT8alvv1S_teQ4AAAB
    socket.on('disconnect',msg=>{
        console.log('disconnected:'+socket.id+' msg:' +msg)
    })

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

        switch(data) { //db+student,tables,create,insert,update-setup
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
    socket.on("adj-delete",data=>{
        let db = new sqlite3.Database('./db/chinook.db');
        let order={};
        order.code=data.code
        order.pumpId=data.pumpId

        //delete from adj where code=10 and pumpId=1;
        db.run(`delete from adj where code="${data.code}" and pumpId="${data.pumpId}"`);                

        db.close();
        console.log('adj-delete:: code='+order.code+' pumpid='+order.pumpId)
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
