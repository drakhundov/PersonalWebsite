import React from 'react'

const EduEntry = ({ entry }) => {
    const { institution, from, to, degree, major } = entry
    return <React.Fragment>
        <div className="edu-entry">
            <h1 className="edu-institution">{institution}</h1>
            <h2 className="edu-major">{major}</h2>
            <h3 className="edu-dates">[{from} - {to}]</h3>
        </div>
    </React.Fragment>
}

export default EduEntry
