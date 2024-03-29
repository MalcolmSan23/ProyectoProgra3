const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query(
      `SELECT Empleados.CI, Empleados.cipadre, Empleados.nom1, Empleados.nom2, Empleados.ape1, Empleados.ape2, Empleados.sexo, Empleados.dir, Empleados.lugarnac, Empleados.teldomicilio, Empleados.email, Empleados.etnia, Empleados.estcivil, Empleados.colorpelo, Empleados.estatura, Empleados.peso, Empleados.idniveledu,Niveledu.nombrenivel, Empleados.cargo, Empleados.contrato, Empleados.departamento, Empleados.ubicacion, Empleados.estado, Empleados.foto, Empleados.clave
    FROM Empleados
    INNER JOIN Niveledu ON Empleados.idniveledu = Niveledu.idniveledu`,
      (err, Empleados) => {
        if (err) {
          res.json(err);
        }
        res.json(Empleados);
      }
    );
  });
};

controller.edit = (req, res) => {
  const { CI } = req.params;

  req.getConnection((err, conn) => {
    conn.query("select * from Empleados where CI=?", [CI], (err, Empleados) => {
      res.json(Empleados[0]);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into Empleados set?", [data], (err, Empleados) => {
      res.json(Empleados);
    });
  });
};

controller.update = (req, res) => {
  const { CI } = req.params;
  const nuevo_Empleados = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update Empleados set ? where CI =?",
      [nuevo_Empleados, CI],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { CI } = req.params;
  req.getConnection((err, conn) => {
    conn.query("delete from Empleados where CI =?", [CI], (err, rows) => {
      res.json({ message: "Registro Eliminado" });
    });
  });
};

module.exports = controller;
