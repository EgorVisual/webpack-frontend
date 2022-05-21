import React from 'react';

const ConfigInfoInput = ({value, placeholder, onChange}) => {
    return (
        <div>
            <div className="conf__info__username username">
                <input type="text" className="username__input" onChange={obj => onChange(obj.target.value)} value={value} placeholder={placeholder}/>
            </div>
        </div>
    );
};

export default ConfigInfoInput