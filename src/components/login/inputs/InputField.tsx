import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type InputFieldPropsType={
    label:string,
    value:string,
    changeValue: (e:ChangeEvent<HTMLInputElement>)=>void,
    errorMessage:string,
    type?:string
}
export const InputField:React.FC<InputFieldPropsType> = ({label,type,errorMessage,value,changeValue}) => {
    return (
        <TextField type={type ? type : ''} error={!!errorMessage} helperText={errorMessage} id="standard-basic" label={label} variant="standard" onChange={changeValue} />
    );
};
