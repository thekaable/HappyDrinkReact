import React, { Component } from 'react'
import logo                 from '../assets/logo.svg'
import '../css/App.css'

import EstablishmentContainer   from '../containers/establishmentContainer'

class App extends Component {

    componentDidMount () {

        this.props.getDataFromApi()
    }

    handleChange = (e) => {
        this.props.filter(e.target.value)
    }

    render() {

      // On filtre
        const establishmentFilter = this.props.state.establishments.filter(e => e.visible )

        const listEstablishment = establishmentFilter.map( establishment => {
            return (
                    <EstablishmentContainer
                        key={ establishment.id }
                        establishment={ establishment }
                    />
                )

        })

        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <h2>Welcome "{ this.props.state.app.pseudo }" to { this.props.title }</h2>

                </div>

                <div className="App-intro">

                    <p> <a onClick={ this.props.randomPseudo } >Changer le pseudo !</a> </p>

                    <div>
                        <input
                            type="text"
                            placeholder="search"
                            value={this.props.state.app.textFilter}
                            onChange={this.handleChange}
                        />
                    </div>

                    <section>
                        { listEstablishment }
                    </section>

                    <section>
                        { this.props.state.app.dataFromAPI }
                    </section>

                </div>

            </div>
        )
    }
}

export default App;
