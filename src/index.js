import React, { Component } from 'react'
import Observer from 'react-intersection-observer';

export default class ObserverWrapper extends Component {
    constructor() {
        super();

        this.useObserver = global.__SERVER__ ||
                            ('IntersectionObserver' in window &&
                            'IntersectionObserverEntry' in window &&
                            'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
                            'isIntersecting' in window.IntersectionObserverEntry.prototype);
    }

    inViewRender(inView) {
        if (inView) {
            return this.props.children;
        } else {
            return null;
        }
    }

    render() {
        if (!this.useObserver || typeof window === 'undefined') {
            return (<div>{this.props.children}</div>);
        }

        return (
            <Observer triggerOnce={true}>
                {this.inViewRender.bind(this)}
            </Observer>
        );
    }
}
