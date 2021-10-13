import React, {  useEffect } from "react";
import { Table } from "semantic-ui-react";

function RestauranteVistaAdmin(props) {
  function PrimeraLetraEnMayuscula(nombreCompleto) {
    return nombreCompleto.replace(/\b\w/g, l => l.toUpperCase());
  }

  return (

    <Table.Row>
      <Table.Cell style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          name="checkbox"
          style={{ transform: "scale(1.4)" }}
          //onClick={() => seleccionarUnAlumne(props.item)}
        />
      </Table.Cell>
      <Table.Cell style={{ textAlign: "center" }}>
        LOGO
      </Table.Cell>
      <Table.Cell>
        {PrimeraLetraEnMayuscula(props.item)}
        {console.log(props.item)}
        {console.log("gio")}
      </Table.Cell>
      <Table.Cell textAlign='center'>
        <div className={"displayFlex centered columnGap"}>
          
          {/*SERVIRA PARA VER ACTIVO EN VERDE O ROJO
           {esEgresade ? null :
            <EditarAlumne
              alumneId={props.item.id}
              actualizarAlumnes={props.actualizarAlumnes} 
              cursoId={props.cursoId}
              />}
          {esEgresade ? null :
            <EliminarAlumne
              alumneId={props.item.id}
              curseId={props.cursoId}
              actualizarAlumnes={props.actualizarAlumnes}
            />
          } */}
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default RestauranteVistaAdmin;
