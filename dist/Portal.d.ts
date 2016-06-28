import React = require('react');
declare class Portal<S> extends React.Component<{
    destinationId: string;
    children?: React.Component<any, any> | React.Component<any, any>[];
    portalTo?: string;
    properties?: any;
}, S> {
    _name: string;
    _destination: Element;
    _portalTo: Element;
    constructor();
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
}
export { Portal };
