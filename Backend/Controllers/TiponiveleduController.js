const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Tiponiveledu.idtiponiveledu, Tiponiveledu.tiponiveledu, Tiponiveledu.estado
    FROM Tiponiveledu`,
      (err, Tiponiveledu) => {
        if (err) {
          res.json(err);
        }
        res.json(Tiponiveledu);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idtiponiveledu } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Tiponiveledu where idtiponiveledu=?", [idtiponiveledu], (err, Tiponiveledu) => {
      res.json(Tiponiveledu[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Tiponiveledu set?", [data], (err, Tiponiveledu) => {
      res.json(Tiponiveledu);
    });
  });
};

controller.update = (req, res) => {
  const { idtiponiveledu } = req.params;
  const nuevo_Tiponiveledu = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Tiponiveledu set ? where idtiponiveledu =?",
      [nuevo_Tiponiveledu, idtiponiveledu],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idtiponiveledu } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Tiponiveledu where idtiponiveledu =?", [idtiponiveledu], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;