const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Empleados',(err,Empleados) =>{
            if(err){
                res.json(err);
            }
            res.json(Empleados  );
        });

    });

};

controller.edit = (req, res) => {

    const {CI}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Empleados where CI=?', [CI], (err,Empleados) => {
            res.json(Empleados[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Empleados set?', [data], (err,Empleados) => {
        res.json(Empleados);
       });
   })
};

controller.update = (req,res) =>{

    const {CI}= req.params;
    const nuevo_Empleados = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Empleados set ? where CI =?', [nuevo_Empleados, CI], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {CI}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Empleados where CI =?', [CI], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
