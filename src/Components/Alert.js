import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.putalert && <div className={`alert alert-${props.putalert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.putalert.msg}</strong>: {capitalize(props.putalert.type)}
        </div>
    )
}
