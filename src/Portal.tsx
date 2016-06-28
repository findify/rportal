/*vendor*/
import React = require('react');
import ReactDOM = require('react-dom');

class Portal<S> extends React.Component<{
    destinationId: string,
    children?: React.Component<any, any> | React.Component<any, any>[],
    portalTo?: string,
    properties?: any
}, S> {
    _name = 'findify-mjs-portal';
    _destination: Element;
    _portalTo: Element;

    constructor() {
        super();
    }

    render() {
        return null as JSX.Element;
    }

    componentDidMount() {
        if (this.props.portalTo) {
            this._portalTo = document.querySelector(this.props.portalTo);
        } else {
            this._portalTo = document.body;
        }

        this._destination = this.props.destinationId && document.getElementById(this.props.destinationId);

        if (!this._destination) {
            this._destination = document.createElement('div');
            this._destination.id = this.props.destinationId;
            this._destination.setAttribute('class', 'findify-mjs');
        }

        this._portalTo && this._portalTo.appendChild(this._destination);
    }

    componentWillUnmount() {
        this._portalTo && this._portalTo.removeChild(this._destination);
    }

    componentDidUpdate() {
        ReactDOM.render(<div className={this._name} {...this.props}>{this.props.children}</div>, this._destination);
    }
}

export {Portal};
