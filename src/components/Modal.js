import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            name: props.name,
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
                <input type="button" class="btn" value="Click for more information" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h2>{this.state.name}</h2>
                        <p>{this.state.description}</p>
                        <p>{this.state.guestAccount}</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}