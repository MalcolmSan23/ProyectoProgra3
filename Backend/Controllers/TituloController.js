const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Titulo.idtitulo, Titulo.titulo, Titulo.estado
    FROM Titulo`,
      (err, Titulo) => {
        if (err) {
          res.json(err);
        }
        res.json(Titulo);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { idtitulo } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Titulo where idtitulo=?", [idtitulo], (err, Titulo) => {
      res.json(Titulo[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Titulo set?", [data], (err, Titulo) => {
      res.json(Titulo);
    });
  });
};

controller.update = (req, res) => {
  const { idtitulo } = req.params;
  const nuevo_Titulo= req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Titulo set ? where idtitulo =?",
      [nuevo_Titulo, idtitulo],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idtitulo } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Titulo where idtitulo =?", [idtitulo], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;