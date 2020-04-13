import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            name: props.name,
            tech: props.tech,
            description: props.description,
            guestAccount: props.guestAccount
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section style={{ backgroundColor: "lightgrey" }}>
                <input type="button" className="btn" value="Click for more information" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h2>{this.state.name}</h2>
                        <div className="modal-body">
                            <p><b>Description: </b>{this.state.description}</p>
                            <p><b>Technology Used: </b>{this.state.tech}</p>
                            <p>{this.state.guestAccount}</p>
                        </div>
                        <a href="" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}