import React, { Fragment } from 'react';

const Button=props=>{
    let { onClick, text, className="btn btn-primary", icon=null, loading = false, disabled = false } = props
    
    return (
        <Fragment>
            { !loading && 
                <button type="button" className={className} onClick={onClick} disabled={disabled}>
                    {!!icon && <i class={icon}></i>}
                    {text}
                </button> }
            { !!loading && 
                <button className={className} disabled={true}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading..
                </button>
            }
        </Fragment>
    )
}
export default Button;