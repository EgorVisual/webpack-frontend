import React from 'react';

const ConfigInfoInput = ({parameter, value, placeholder, onChange}) => {
    let inputType = 'text'
    if(parameter === "password"){
        inputType = "password"
    }
    return (
        <div>
            <div className="conf__info__list conf-list">
                <span className="conf-list__text">{placeholder}:</span>
                <input type={inputType} className="conf-list__input" onChange={obj => onChange(parameter,obj.target.value)}
                       value={value} placeholder={placeholder}/>
            </div>
        </div>
    );
};

export default ConfigInfoInput