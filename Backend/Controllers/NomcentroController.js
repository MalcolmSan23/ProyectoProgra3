const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Nomcentro.idnomcentro, Nomcentro.nomcentro, Nomcentro.estado
    FROM Nomcentro`,
      (err, Nomcentro) => {
        if (err) {
          res.json(err);
        }
        res.json(Nomcentro);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idnomcentro } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Nomcentro where idnomcentro=?", [idnomcentro], (err, Nomcentro) => {
      res.json(Nomcentro[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Nomcentro set?", [data], (err, Nomcentro) => {
      res.json(Nomcentro);
    });
  });
};

controller.update = (req, res) => {
  const { idnomcentro } = req.params;
  const nuevo_Nomcentro = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Nomcentro set ? where idnomcentro =?",
      [nuevo_Nomcentro, idnomcentro],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idnomcentro } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Nomcentro where idnomcentro =?", [idnomcentro], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;