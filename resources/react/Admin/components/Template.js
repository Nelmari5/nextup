
import React, { Component, Fragment } from 'react';

import { TopNavbar, Sidebar, Footer } from './Navigation'

class Template extends Component {
 
    render () {
        let { page, breadcrumbs, children, showBack, history } = this.props

        let breadcrumb = null
        if(!!breadcrumbs){
            breadcrumb = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                { breadcrumbs.map((breadcrumb, i) => 
                    <li key={i} className={ breadcrumb.is_active ? "breadcrumb-item active" : "breadcrumb-item" }><a href={breadcrumb.link}>{breadcrumb.name}</a></li>
                )}
            </ol>
        }

        let backButton = null;
        if(!!showBack){
            backButton = <div className="pull-right">
               <a className="btn btn-outline-warning" onClick={()=> history.goBack()}>Back</a>
           </div>
        }

        return (
            <Fragment>
                <TopNavbar />
                <Sidebar />

                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">{page}</h1>
                                    <ol className="breadcrumb float-sm-right">
                                        { breadcrumb }
                                    </ol>
                                </div>
                                <div className="col-sm-6">
                                    { backButton }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="container-fluid">
                            { children }
                        </div>
                    </div>
                </div>

                <Footer />
            </Fragment>
        )
    }
}

export default Template