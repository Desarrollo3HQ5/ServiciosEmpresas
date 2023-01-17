const empleadoCtrl ={}
// Date_of_Joining=13-May-2019
import { UrlAccestoken,AccesToken,Consulta} from '../controllers/URLs.js'
empleadoCtrl.getempleado = (req, res) => {
    var cc = req.params.id;
    var URL_ = UrlAccestoken();
    AccesToken(
      URL_,
      { answer: 42 }
    ).then((data) => {
      const url = (
        'https://creator.zoho.com/api/v2/hq5colombia/clientes/report/Base_empleados_servicios_empresas_Report?' +
        new URLSearchParams({ N_mero_de_Identificaci_n: cc }).toString()
      );
      Consulta(url, { answer: 42 }, data["access_token"]).then((data2) => {
        if (data2.code == 3000) {
          if (data2.data[0].N_mero_de_Identificaci_n == cc) {
            res.json(data2.data[0]);
          }
          else{
            console.log("no")
          }
        }
        else
        {
          res.json(data2);
        }
      });
    });
  };
// empleadoCtrl.addbiometrico = (req, res) => res.send("Biometrico");
export {empleadoCtrl}

