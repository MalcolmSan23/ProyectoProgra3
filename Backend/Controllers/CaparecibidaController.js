const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Caparecibida.idcapa, Caparecibida.CI, Caparecibida.idtitulo, Caparecibida.idtipocapa, Caparecibida.finicio, Caparecibida.ffin, Caparecibida.idnomcentro, Caparecibida.idfacultad, Caparecibida.tomo, Caparecibida.folio, Caparecibida.estado
    FROM Caparecibida
    INNER JOIN Nomcentro ON Caparecibida.idnomcentro = Nomcentro.idnomcentro
    INNER JOIN Empleados ON Caparecibida.CI = Empleados.CI
    INNER JOIN Titulo ON Caparecibida.idtitulo = Titulo.idtitulo 
    INNER JOIN Tipocapacitacion ON Caparecibida.idtipocapa = Tipocapacitacion.idtipocapa 
    INNER JOIN Facultad ON Caparecibida.idfacultad = Facultad.idfacultad   `,
    
      (err, Caparecibida) => {
        if (err) {
          res.json(err);
        }
        res.json(Caparecibida);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idcapa } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Caparecibida where idcapa=?", [idcapa], (err, Caparecibida) => {
      res.json(Caparecibida[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Caparecibida set?", [data], (err, Caparecibida) => {
      res.json(Caparecibida);
    });
  });
};

controller.update = (req, res) => {
  const { idcapa } = req.params;
  const nuevo_Caparecibida = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Caparecibida set ? where idcapa =?",
      [nuevo_Caparecibida, idcapa],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idcapa } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Caparecibida where idcapa =?", [idcapa], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;