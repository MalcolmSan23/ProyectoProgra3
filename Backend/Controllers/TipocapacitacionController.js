const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from Tipocapacitacion',(err,Tipocapacitacion) =>{
            if(err){
                res.json(err);
            }
            res.json(Tipocapacitacion);
        });

    });

};

controller.edit = (req, res) => {

    const {idtipocapa}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from Tipocapacitacion where idtipocapa=?', [idtipocapa], (err,Tipocapacitacion) => {
            res.json(Tipocapacitacion[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into Tipocapacitacion set?', [data], (err,Tipocapacitacion) => {
        res.json(Tipocapacitacion);
       });
   })
};

controller.update = (req,res) =>{

    const {idtipocapa}= req.params;
    const nuevo_Tipocapacitacion = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update Tipocapacitacion set ? where idtipocapa =?', [nuevo_Tipocapacitacion, idtipocapa], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtipocapa}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from Facultad where idfacultad =?', [idtipocapa], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;