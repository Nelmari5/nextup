// Declare Dependencies
import React, { Component } from 'react';

// Declare Widget
import { Template } from '../../components';

class _401 extends Component {

    render() {
        return (
            <Template>
              <div className="error-page">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <br/>
                <p>Error: 401 Unauthorized Error</p>
                <br/>
                <p><a href="/" className="error-button">Back to Home</a></p>
              </div>
            </Template>
        )
    }

}
export default _401
