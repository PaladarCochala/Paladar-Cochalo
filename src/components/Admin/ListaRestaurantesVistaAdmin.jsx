
import React, { Component,useEffect } from "react";
import { Dimmer, Header, Loader, Message, Icon, Table, Divider, Grid } from "semantic-ui-react";
import RestauranteVistaAdmin from "../Admin/RestauranteVistaAdmin";
import { getRestaurantes } from '../../services/restaurante';

class ListaRestaurantesVistaAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantes: [],
      mostrarBotonDeCarga: true,
      restaurantesSeleccionados: [],
      prueba: []
    };
  }
  

  iconoDeCarga() {
    return (
      this.state.mostrarBotonDeCarga === true && (
        <Dimmer active inverted>
          <Loader inverted>Cargando</Loader>
        </Dimmer>
      )
    );
  }
  

    componentDidMount(){
        getRestaurantes()
        .then((response) => {
            return response.data;
        })
        .then((response) => {
            this.setState({
                restaurantes: response.response
              });
            //console.log(response.response)
            
        })
    }


  listaRestaurantes() {
      this.prueba= this.mapeoListaRestaurantes(this.state.restaurantes);
      console.log(this.prueba);
    return this.prueba;
  }
 
  mapeoListaRestaurantes(listaRestaurantes) {
    return listaRestaurantes.map((restaurante, contador) => {
         <RestauranteVistaAdmin item={restaurante}
          numeracion={contador + 1} />;
    });
  }
  listaVacia() {
    return <Message
        icon="warning sign"
        warning
        header={"Lo sentimos, por el momento no tenemos alumnes disponibles."}
        content={"Intenta mas tarde. Gracias"}
      />
  }

  


  render() {
    
    return (
      <div>
        <Grid centered>
          <Header as='h2' textAlign='center' style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Header.Content>Lista Restaurantes</Header.Content>
          </Header>
        </Grid>
        <Divider />

        <div style={{ overflowX: "auto" }}>
          <Table singleLine selectable striped unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    //onClick={() => this.seleccionarTodosLosAlumes()}
                    style={{ transform: "scale(1.4)" }}
                  />
                </Table.HeaderCell>
                <Table.HeaderCell>Logotipo</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Acciones</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {/* {this.state.restaurantes.length === 0 ? this.listaVacia(): */}
            <Table.Body>{this.listaRestaurantes()}</Table.Body>
          </Table>

        </div>
      </div>
    );
  }
}
export default ListaRestaurantesVistaAdmin;