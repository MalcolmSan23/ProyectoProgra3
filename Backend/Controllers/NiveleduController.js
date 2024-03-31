const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Niveledu.idniveledu, Niveledu.nombrenivel, Niveledu.idtiponiveledu, Niveledu.idespecial, Niveledu.idnomcentro, Niveledu.fobtenido, Niveledu.estado
    FROM Niveledu
    INNER JOIN Tiponiveledu ON Niveledu.idtiponiveledu = Tiponiveledu.idtiponiveledu
    INNER JOIN Especialidad ON Niveledu.idespecial = Especialidad.idespecialidad
    INNER JOIN Nomcentro ON Niveledu.idnomcentro = Nomcentro.idnomcentro   `,
    
      (err, Niveledu) => {
        if (err) {
          res.json(err);
        }
        res.json(Niveledu);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idniveledu } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Niveledu where idniveledu=?", [idniveledu], (err, Niveledu) => {
      res.json(Niveledu[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Niveledu set?", [data], (err, Niveledu) => {
      res.json(Niveledu);
    });
  });
};

controller.update = (req, res) => {
  const { idniveledu } = req.params;
  const nuevo_Niveledu = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Niveledu set ? where idniveledu =?",
      [nuevo_Niveledu, idniveledu],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idniveledu } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Niveledu where idniveledu =?", [idniveledu], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;