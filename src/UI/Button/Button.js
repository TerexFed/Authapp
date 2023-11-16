import React from 'react'
import s from './Button.module.css'

export default function Button({ title, color, ...otherProps }) {
    return (
        <button
            className={`${s.btn_elem} ${s[color]}`}
            {...otherProps}
        >
            {title}
        </button>
    )
}
