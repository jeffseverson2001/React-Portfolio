import React from 'react'
import resume from '../images/Jeff_Severson_Resume.pdf'

export default function Resume() {
    return (
        <div>
            <embed src={resume} width="100%" height="1920px" />  
        </div>
    )
}