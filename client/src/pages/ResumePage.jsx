import React, { useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'

const Resume = () => {
    const baseUrl = import.meta.env.VITE_API_URL
    const [pdfUrl, setPdfUrl] = useState(null)
    const iframeRef = useRef(null)
    useEffect(() => {
        fetch(`${baseUrl}/personal_resume`)
            .then((response) => {
                return (response.blob().then((blob) => {
                    const blobUrl = URL.createObjectURL(blob)
                    console.log(blobUrl)
                    setPdfUrl(blobUrl)
                }))
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <React.Fragment>
            <Helmet>
                <title>Resume</title>
            </Helmet>
            {pdfUrl &&
                <>
                    <iframe
                        ref={iframeRef}
                        src={pdfUrl}
                        style={{  width: '100%', height: '80vh', border: 'none' }}
                        title="PDF Viewer"
                    />
                </>
            }
        </React.Fragment>
    )
}

export default Resume