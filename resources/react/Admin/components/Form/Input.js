import React, { Fragment } from 'react';

const Input=props=>{
    let { type, name, value, placeholder, onChange, className="form-control", checked=false, required=false, arr = [], errors = [] } = props
    
    let input = null;
    if(type == "text"){
        input = 
        <Fragment>
            <input type="text" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "number"){
        input = 
        <Fragment>
            <input type="number" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "email"){
        input = 
        <Fragment>
            <input type="email" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "textarea"){
        input = 
        <Fragment>
            <textarea className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "password"){
        input = 
        <Fragment>
            <input type="password" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "email"){
        input = 
        <Fragment>
            <input type="email" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback">
                {errors[name]}
            </div>)}
        </Fragment>
    }
    if(type == "select"){
        input = 
        <Fragment>
            <select className={`${className}  custom-select ${errors[name] && 'is-invalid'}`} name={name} value={value} onChange={onChange}>
                <option value={0}> {!!placeholder ? placeholder : `-- Select -- `}</option>
                { arr.map((obj, i) => 
                    <option key={i} value={obj.id}>{obj.name}</option>
                )}
            </select>
            {errors[name] && (<div className="invalid-feedback">
                    {errors[name]}
            </div>)}
         </Fragment>
    }
    if(type == "file"){
        input = 
        <Fragment>
            {/* <label htmlFor={`filecontrol${name}`}>{!!placeholder ? placeholder : `Choose file`}</label> */}
            <input type="file" id={`filecontrol${name}`} className={`${className}-file ${errors[name] && 'is-invalid'}`} name={name} value={value} onChange={onChange} required={required}/>
            {errors[name] && (<div className="invalid-feedback"> {errors[name]} </div>)}
        </Fragment>
    }
    if(type == "radio"){
        input = 
        <Fragment>
            <input type="radio" className={`${className} ${errors[name] && 'is-invalid'}`} name={name} defaultChecked={value} onClick={onChange}></input>
            {placeholder}
            {errors[name] && (<div className="invalid-feedback"> {errors[name]} </div>)}
        </Fragment>
    }
    return input
}
export default Input;