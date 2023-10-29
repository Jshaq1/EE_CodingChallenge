import React from 'react'
import '../../Css/Utils.scss'

const ErrorLoading = ({ message }) => {
    return (
        <div className='error-message'>
            <h4>{message}</h4>
        </div>
    )
}

export default ErrorLoading