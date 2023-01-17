//importaciones
import express from "express"
import {dirname, join} from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser";
//Enrutador
import indexRoutes from './routes/index.js'

//Objetos
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))


app.set('views',join(__dirname,'views'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//Motor de pantillas (EJS)
// app.set('view engine','ejs')
//Usar el enrutador
app.use(indexRoutes)
//usar los archivos staticos
app.use(express.static(join(__dirname,'public')))
//Escuchar el puerto
app.listen(3000)
console.log("Server is listening on port 3000")