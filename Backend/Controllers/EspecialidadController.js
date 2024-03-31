const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Especialidad.idespecialidad, Especialidad.especialidad, Especialidad.estado
    FROM Especialidad`,
      (err, Especialidad) => {
        if (err) {
          res.json(err);
        }
        res.json(Especialidad);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idespecialidad } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Especialidad where idespecialidad=?", [idespecialidad], (err, Especialidad) => {
      res.json(Especialidad[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Especialidad set?", [data], (err, Especialidad) => {
      res.json(Especialidad);
    });
  });
};

controller.update = (req, res) => {
  const { idespecialidad } = req.params;
  const nuevo_Especialidad = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Especialidad set ? where idespecialidad =?",
      [nuevo_Especialidad, idespecialidad],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idespecialidad } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Especialidad where idespecialidad =?", [idespecialidad], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;
