
const express=require('express');
const cors=require('cors')
// const fs=require('fs').promises;  //it causes TypeError: fs.existsSync is not a function
const fs=require('fs');
const app=express();
const server=require('http').createServer(app);
const sqlite3=require('sqlite3').verbose();
let io=require('socket.io')(server,{cors:{origin:"*"}});

//const router=express.Router()

//org 1605
server.listen(1605,()=>{
    console.log('Http & Socket.io ready for Listening on port 1605')
})


let freerunning=0
//var clients=[]
let responseMsg
const net=require('net');
const exp = require('constants');
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

        //console.log('sp[4]=',sp[4],sp[4].length,sp[4][7])
        // io.sockets.emit('tcp-res',{ip:ipAddr,id:sp[2],cnt:freerunning})

        //io.sockets.emit('tcp-res',{ip:ipAddr,id:sp[2],cnt:freerunning,status: sp[4]})
        io.sockets.emit('tcp-res',{ip:ipAddr,id:sp[2],cnt:0,status: sp[4]})
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
app.use(cors())
/*
express.json() and express.urlencoded() are built-in middleware functions 
to support JSON-encoded and URL-encoded bodies. 
*/
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// router.use((req,res,next)=>{
//     console.log(req.method,req.url)
//     next()
// })
// router.get('/',(req,res)=>{
//     res.send('I am the Home page!')
// })
// router.get('/about',(req,res)=>{
//     res.send('I am the about page!')
// })
// router.get('/api',(req,res)=>{
//     res.send('I am the api page!')
// })

// app.use('/',router)

/*
REST API(Representational State Transfer)
    req::client side -> axios.get/post/put/delete ->  db(Rest Web Service Server)
    res::db -> json/xml -> client

    get /movies  get list of movies
    get /movies/:id  find a movie by its id
    post /movies    create a new movie
    put  /movies    update an existing movie
    delete /movies   delete an existing movie

    REST API를 제공하는 웹서비스를 'RESTful' 하다고 한다
*/

app.get('/',(req,res)=>{
    fs.readFile(__dirname + '/index.html')
    .then(contents=>{
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

/*
    https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
    To get information from client users.
    two methods are url parameters and post parameters.
    how to use express to retrieve url parameters and post parameters from requests.
*/
/*
    get method
    request data No, return data Yes
*/
app.get('/data',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*' )
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.write(JSON.stringify({ message: "Hello Json"}));  
    res.end();  

})
/*
http://localhost:1605/api/users?id=4&name=wjlee

req.query can be used to retrieve values for URL parameters.
*/
app.get('/api/users',(req,res)=>{
    const id=req.query.id
    const name=req.query.name
    console.log('req.query:',req.query)
    res.send({
        'id':id,
        'name':name
    })
} )

/*
http://localhost:1605/api/211

router with params
*/

app.get('/hello',(req,res)=>{
    res.send('this is sample route(/hello) with a route the way we are used to seeing it')
})

// routes will go here
//
app.get('/api/:version',(req,res)=>{
    // http://localhost:1605/api/211
    console.log('req.params:',req.params)
    console.log('req.params:',req.params.version)
    //res.send(req.params.verion)
    res.send( { 
        'test': 'wj test',
        'version':req.params.version
    })
})

/*
    using .param with route handlers
*/

app.param('name',(req,res,next,name)=> {
    const modified = name.toUpperCase()
    req.name=modified
    next()
})
app.get('/api/users/:name',(req,res)=>{
    console.log('params:', req.params)
    console.log('params:', req.params.name)
    res.send('Hello '+ req.name + '!')
})
const users =[
    {id:1,name: '111'},
    {id:2,name: '222'},
    {id:3,name: '333'},
]

app.post('/data',(req,res)=>{

    const id=req.body.id
    const name=req.body.name
    console.log('req:',req.body)
    //res.send(users)
    res.send({
        'id': id,
        'name': name
    })
    res.end()
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

let odt ={
    odtId:'',
    cost:'',
    literLimit:''
}

io.on("connection",socket=>{
    console.log("socket io connection:"+socket.id) //socket io connection:KpIT8alvv1S_teQ4AAAB

	try {
		if( fs.existsSync('wj.json')){
            console.log('wj.json exist');
            fs.readFile('wj.json','utf-8',(err,jsonString)=>{
                if(err) return
                try {
                    let data=JSON.parse(jsonString)
                    //console.log(data)
                }
                catch(err) {
                    console.log('err',err)
                }
            })
		}

	}
	catch(err) {
		console.error(err);
	}



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
    //
    socket.on("odt",(cmd,arg)=>{
        //odt=data
        //io.emit("odt",odt)
        console.log('odt test',cmd)
        if(cmd=='read') {
            let db = new sqlite3.Database('./db/chinook.db');
            sql = `select * from odt`;
            let rowsArray=[]
            db.all(sql, [], (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                    console.log(row);
                    rowsArray.push(row)
                });
                db.close()
                io.emit("odt",rowsArray);
            });
        }
        else if(cmd=='write') {
            
            console.log('write mode',arg )

            //let cost='1234'
            //let literLimit='99'
            let found=false;
            let db = new sqlite3.Database('./db/chinook.db');

            sql = `update odt set cost="${arg.cost}",literLimit="${arg.literLimit}",dTotal="${arg.dTotal}"  where odtId="${arg.odtId}" `;
            db.run(sql)
            db.close();


            // sql=`select * from odt where odtId="${arg.odtId}" `;
            // db.all(sql,[],(err,rows)=>{
            //     if(err) throw err;
            //     rows.forEach((row)=>{
            //         console.log('forEach',row.odtId,arg.odtId);
            //         if(row.odtId==arg.odtId) found=true;
            //     });
            // })
            // console.log('async problem!! found',found);
            // if(found==false) {
            //     console.log('New odtId found & inserted');
            //     sql = `insert into odt values( "${arg.odtId}","${arg.cost}","${arg.literLimit}") `;
            //     db.run(sql)
            //     db.close();
            // }
            // else {
            //     sql = `update odt set cost="${arg.cost}",literLimit="${arg.literLimit}" where odtId="${arg.odtId}" `;
            //     db.run(sql)
            //     db.close();
            // }
        }


    })

    socket.on("sales",(cmd,arg)=>{
        console.log('sales test',cmd)
        if(cmd=='read') {
            // let db = new sqlite3.Database('./db/chinook.db');
            let db = new sqlite3.Database('./db/chinook.db');
            sql = `select * from sales`;
            let rowsArray=[]
            db.all(sql, [], (err, rows) => {
                if (err) {
                    console.log('err:',err)//throw err;
                    db.close()
                }
                else {
                    rows.forEach((row) => {
                        console.log(row);
                        rowsArray.push(row)
                    });
                    db.close()
                    io.emit("sales",rowsArray);
                }
            });
        }
        else if(cmd=='write') {
            
            console.log('write mode',arg )
            let db = new sqlite3.Database('./db/chinook.db',(err)=>{
                // console.log('db open error:',err)
                sql = `insert into sales values("${arg.odtId}","${arg.date}","${arg.carNumber}","${arg.liter}",
                "${arg.cost}","${arg.amount}","${arg.class}" ) `;
                db.run(sql,(err)=>{
                    if(err)  console.log('err:',err)
                })
                db.close();

            });

            // sql = `insert into sales values("${arg.odtId}","${arg.date}","${arg.carNumber}","${arg.liter}",
            //                                 "${arg.cost}","${arg.amount}","${arg.class}" ) `;
            // db.run(sql)
            // db.close();

        }

    })

    //
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
    socket.on("dline",(data,callback)=>{
        if(data.p1=='dl') {  //deadLine
            let db = new sqlite3.Database('./db/chinook.db')
            sql = `create table sales_${data.p2} as select * from sales`;
            db.run(sql,(err)=>{
                db.close()
                if(err)  {
                    console.log('err:',err)
                    callback({ status: 'notok'})

                }
                else {
                    console.log('dl success')
                    callback({ status: 'ok'})

                }
            })
            // db.close();
            //callback({ status: 'ok'})
        }
        else if(data.p1=='dl-clear') {
            console.log('lets clear sales table')
            let db = new sqlite3.Database('./db/chinook.db')
            sql = `delete from sales`;
            db.run(sql,(err)=>{
                db.close()
                if(err)  {
                    console.log('err:',err)
                    callback({ status: 'notokay'})

                }
                else {
                    console.log('dl-clear success')
                    callback({ status: 'okay'})

                }
            })
            // db.close();
            // callback({
            //     status: 'okay'
            // })


        }
    })

    socket.on("myBell",data=>{
        console.log('myBell:',__dirname)
        if(data.p1=='on') {
            console.log('on:'+data.p1)
            
            // const path=require('path')
            // const filePath=path.join(__dirname,'/db')
            // console.log('filePath=',filePath)
            // fs.readdir(filePath,function(err,filelist){ 
            //     console.log(filelist); 
            // });
            fs.readdir(__dirname+'/db',function(err,filelist){
                console.log(filelist)
            })


        }
        else if(data.p1=='off') {
            console.log('off:'+data.p1)
            let file='/db/test.db'
            fs.open(__dirname+file,'w+',function(err,fd){
                if(err) throw err
                console.log('file open complete')
            })

        }
        else if(data.p1=='make-table') {

            let db = new sqlite3.Database('./db/chinook.db')
            sql = `create table sales_${data.p2}(odtId text,date text,carNumber text,liter text,cost text,amount text, class text)`;
            db.run(sql,(err)=>{
                if(err)  console.log('err:',err)
                else console.log('create table success')
            })
            db.close();


        }
        else if(data.p1=='dl') {  //deadLine
            let db = new sqlite3.Database('./db/chinook.db')
            sql = `create table sales_${data.p2} as select * from sales`;
            db.run(sql,(err)=>{
                if(err)  console.log('err:',err)
                else console.log('dl success')
            })
            db.close();


        }
    })
})
