import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const err = useRouteError()
    console.log(err.data );
  return (
    <>
    <div>Error</div>
    <h3> {err.statusText } </h3>
    </>
  )
}

export default Error