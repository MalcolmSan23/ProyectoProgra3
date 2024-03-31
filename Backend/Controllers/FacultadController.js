const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Facultad.idfacultad, Facultad.facultad, Facultad.estado
    FROM Facultad`,
      (err, Facultad) => {
        if (err) {
          res.json(err);
        }
        res.json(Facultad);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idfacultad } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Facultad where idfacultad=?", [idfacultad], (err, Facultad) => {
      res.json(Facultad[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Facultad set?", [data], (err, Facultad) => {
      res.json(Facultad);
    });
  });
};

controller.update = (req, res) => {
  const { idfacultad } = req.params;
  const nuevo_Facultad = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Facultad set ? where idfacultad =?",
      [nuevo_Facultad, idfacultad],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idfacultad } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Facultad where idfacultad =?", [idfacultad], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;