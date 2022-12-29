import React, {useEffect, useRef, useState} from 'react'

import './dropdown.css'



const Dropdown = props => {
    const [isOpen, setIsOpen] =useState(false);
    const dropdown_toggle_el = useRef(null)
useEffect(()=>{
    document.addEventListener('mousedown', (e)=>{
        if( dropdown_toggle_el.current && dropdown_toggle_el.current.contains(e.target)) {
            setIsOpen(!isOpen)
        }else{
            if( dropdown_toggle_el.current && !dropdown_toggle_el.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
    })
})
    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div className={`dropdown__content ${isOpen ? 'active' : ''}`}>
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown
