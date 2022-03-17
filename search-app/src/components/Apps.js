import React from 'react'

export default function Apps(props) {
    const {details} = props
    const {title} = details
  return (
    <p>{title}</p>
  )
}
