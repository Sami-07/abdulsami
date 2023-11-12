import React from 'react'

const SectionWrapper = (Component, idName) =>
    function HOC() {

        return (
            <div className={`max-w-7xl mx-auto relative z-0 `}>
                <span className='hash-span' id={idName}></span>
                <Component />
            </div>
        )

    }

export default SectionWrapper