"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        _super.call(this);
        this._name = 'findify-mjs-portal';
    }
    Portal.prototype.render = function () {
        return null;
    };
    Portal.prototype.componentDidMount = function () {
        if (this.props.portalTo) {
            this._portalTo = document.querySelector(this.props.portalTo);
        }
        else {
            this._portalTo = document.body;
        }
        this._destination = this.props.destinationId && document.getElementById(this.props.destinationId);
        if (!this._destination) {
            this._destination = document.createElement('div');
            this._destination.id = this.props.destinationId;
            this._destination.setAttribute('class', 'findify-mjs');
        }
        this._portalTo && this._portalTo.appendChild(this._destination);
    };
    Portal.prototype.componentWillUnmount = function () {
        this._portalTo && this._portalTo.removeChild(this._destination);
    };
    Portal.prototype.componentDidUpdate = function () {
        ReactDOM.render(React.createElement("div", React.__spread({className: this._name}, this.props), this.props.children), this._destination);
    };
    return Portal;
}(React.Component));
exports.Portal = Portal;
