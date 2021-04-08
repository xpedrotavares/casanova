import React from 'react'
import patternImg from '../../images/pattern.svg'

import { PatternContainer } from './PatternElements'

const Pattern = () => {
    return (
        <PatternContainer>
            <div>

            <img src={patternImg} alt="Pattern" />
            </div>
        </PatternContainer>
    )
}

export default Pattern
