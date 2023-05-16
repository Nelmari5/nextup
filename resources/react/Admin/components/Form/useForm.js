
import { useState } from 'react';

export const useForm = (callback, initialState = {}, validate) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})

    const onChange=e=> setValues({...values, [e.target.name]: e.target.value})
    const onSubmit=e=>{
        let validation = validate(values)
        if(Object.keys(validation).length === 0){
            callback(values);
        } else {
            setErrors(validation)
        }
    }

    return {
        onChange,
        onSubmit,
        errors,
        values
    }
}
