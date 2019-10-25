import React from 'react'
//Loading component
function Loading() {
    return(
    <div className="d-flex halfDivided align-items-stretch ">
        <>
            <div className="container mt-5">
                <h1 className="text-center display-1 mb-3">Loading...</h1>
                <div className="row justify-content-between">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    
                </div>
            </div>
        </></div>
    )
}
export default Loading