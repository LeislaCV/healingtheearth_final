import { AuthButton, useRestActor } from "@bundly/ares-react";
import { url } from "inspector";

export default function IcConnectPage() {
    const backend = useRestActor("backend");

    async function testFunction() {
        try {
            const response = await backend.post("/test", { hello: "world" }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log({ response });
        } catch (error) {
            console.error({ error });
        }
    }

    async function whoAmI() {
        try {
            const response = await backend.get("/whoami");

            console.log(response);
        } catch (error) {
            console.error({ error });
        }
    }
    function Tomate() {
        var Cultivo = document.getElementById("cultivo")?.ariaValueText;
        var Ph = document.getElementById("Ph")?.ariaValueText;
        var Humedad = document.getElementById("Humedad")?.ariaValueText;
        var Temperatura = document.getElementById("Temperatura")?.ariaValueText;



        var Tomate = "<h2>Datos Necesarios:</h2>";
        Tomate += "<p><strong>Cultivo:</strong> " + "Lechuga" + "</p>";
        Tomate += "<p><strong>Ph:</strong> " + 2.5 + "</p>" + "<p></strong>TU PH ES DEMASIADO ALTO</strong>";
        Tomate += "<p><strong>Humedad:</strong> " + 22 + "</p>"  + "<p></strong>TU HUMEDAD ES MUY ALTA</strong>";
        Tomate += "<p><strong>Temperatura:</strong> " + 20 + "</p>"  + "<p></strong>TU TEMPERATURA ES MUY ALTA</strong>";



        document.getElementById("Tomate")!.innerHTML = Tomate;
    }

    return (
        <>
        
        <div style={{alignContent:"center", alignItems:"center", alignSelf:"center", textAlign:"center"}} className="cuerpo">
            <title>Hakathon</title>

            <h2 style={{fontSize:60, color:"brown"}}>Datos del Cultivo</h2>
            <form>
                <label style={{fontSize:30, color:"black"}} htmlFor="Cultivo">Cultivo:</label><br />
                <input style={{width:160, height:30}} type="Cultivo" id="Cultivo" name="Cultivo" /><br /><br />

                <label style={{fontSize:30, color:"black"}} htmlFor="Ph">Ph:</label><br />
                <input style={{width:160, height:30}} type="Ph" id="Ph" name="Ph" /><br /><br />

                <label style={{fontSize:30, color:"black"}}  htmlFor="Humedad">Humedad:</label><br />
                <input style={{width:160, height:30}} type="Humedad" id="Humedad" name="Humedad" /><br /><br />

                <label style={{fontSize:30, color:"black"}} htmlFor="Temperatura">Temperatura:</label><br />
                <input style={{width:160, height:30}} type="Temperatura" id="Temperatura" name="Temperatura" /><br /><br />



                <div id="Tomate"></div>
            </form>
            <input onClick={Tomate} value="Guardar" />
            </div>
        </>
        
        
    );
}