const biometricoCtrl ={}
import { UrlAccestoken,AccesToken,Consulta,agregar,update,uploadFIle} from '../controllers/URLs.js'
biometricoCtrl.getBiometrico = (req, res) => {
    var cc = req.params.id;
    
    var estado = req.params.estado;
    var Validacion = req.params.validacion;
    var URL_ = UrlAccestoken();
    let now = new Date();
    const  dias = now.getDate();
    var Mes1_ = now.getMonth();
    var Mes2_ = parseInt(Mes1_) + 1;
    var FechaActual_ = now.getDate() + "/" + Mes2_ + "/" + now.getFullYear()
    
    AccesToken(
      URL_,
      { answer: 42 }
    ).then((data) => {
        if (Validacion == "1") {
            if (estado == "Ingreso") {
                var Params_ = new URLSearchParams({ N_mero_de_Identificaci_n: cc,Fecha_ingreso:FechaActual_}).toString();
            }
            else{
                var Params_ = new URLSearchParams({ N_mero_de_Identificaci_n: cc,Fecha_salida:FechaActual_}).toString();
            }
        }
        else{
              if (now.getHours() >= 1 && now.getHours() <=9 ) {
                now.setDate( dias - 1 )
                var Mes1_ = now.getMonth();
                var Mes2_ = parseInt(Mes1_) + 1;
                FechaActual_ = now.getDate() + "/" + Mes2_ + "/" + now.getFullYear()
              }
              var Params_ = new URLSearchParams({ N_mero_de_Identificaci_n: cc,Fecha_ingreso:FechaActual_}).toString();
        }
        
      const url = (
        'https://creator.zoho.com/api/v2/hq5colombia/clientes/report/Biometrico1_Report?' + Params_
      );
      Consulta(url, { answer: 42 }, data["access_token"]).then((data2) => {
        console.log(data2)
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
}
biometricoCtrl.addBiometrico = (req, res) => {
    let now = new Date();
    var Mes1_ = now.getMonth();
    var Mes2_ = parseInt(Mes1_) + 1;
    const Fecha_ = now.getDate() + "/" +  Mes2_ + "/" + now.getFullYear();
    const Hora_ = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    const Estado = req.params.estado;

    var FechaI_ = null
    var HoraI_ = null
    var FechaS_ = null
    var HoraS_ = null
    if (Estado == "Ingreso") {
        FechaI_ = Fecha_
        HoraI_ = Hora_
    }
    else{
        FechaS_ = Fecha_
        HoraS_ = Hora_
    }
    const datos = { data:{
    "Empleado": req.body.IDempelado,
    "Empresa": req.body.Empresa,
    "Nombre":req.body.Nombre,
    "N_mero_de_Identificaci_n":req.body.N_mero_de_Identificaci_n,
    "Fecha_ingreso":FechaI_,
    "Fecha_salida":FechaS_,
    "Hora_ingreso":HoraI_,
    "Hora_salida":HoraS_,
  }
  };
    var URL_ = UrlAccestoken();
    AccesToken(
      URL_,
      { answer: 42 }
    ).then((data) => {
      var url ="https://creator.zoho.com/api/v2/hq5colombia/clientes/form/Biometrico1";
      agregar(url, datos, data["access_token"]).then((data2) => {
        console.log(data2);
        res.json(data2.data);
      });
    });
}
biometricoCtrl.updateBiometrico = (req, res) => {
    var ID = req.params.id;
    let now = new Date();
    var Mes1_ = now.getMonth();
    var Mes2_ = parseInt(Mes1_) + 1;
    const Fecha_ = now.getDate() + "/" +  Mes2_ + "/" + now.getFullYear();
    const Hora_ = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    
    const datos = { data:{
    "Empleado": req.body.IDempelado,
    "Empresa": req.body.Empresa,
    "Nombre":req.body.Nombre,
    "N_mero_de_Identificaci_n":req.body.N_mero_de_Identificaci_n,
    "Fecha_salida":Fecha_,
    "Hora_salida":Hora_,
  }
  };
    var URL_ = UrlAccestoken();
    AccesToken(
      URL_,
      { answer: 42 }
    ).then((data) => {
      var url ="https://creator.zoho.com/api/v2/hq5colombia/clientes/report/Biometrico1_Report/"+ID;
      update(url, datos, data["access_token"]).then((data2) => {
        console.log(data2);
      });
    });
}
biometricoCtrl.uploadFile =(req,res) => {
  
  var ID = req.params.id;
  console.log("JUAN")
  console.log(ID)
  const datos = { file:{
    "name":"juan",
    "file":req.body.File
  }
  };
  var URL_ = UrlAccestoken();
    AccesToken(
      URL_,
      { answer: 42 }
    ).then((data) => {
      var url ="https://creator.zoho.com/api/v2/hq5colombia/clientes/report/Biometrico1_Report/"+ID + "/Foto_ingreso/upload";
      console.log(url)
      uploadFIle(url, datos, data["access_token"]).then((data2) => {
        console.log(data2);
      });
    });
}
export {biometricoCtrl}

