import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type InputFieldPropsType={
    label:string,
    value:string,
    changeValue: (e:ChangeEvent<HTMLInputElement>)=>void
}
export const InputField:React.FC<InputFieldPropsType> = ({label,value,changeValue}) => {
    return (
        <TextField id="standard-basic" label={label} variant="standard" onChange={changeValue} />
    );
};
