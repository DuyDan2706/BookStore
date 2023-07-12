/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react'
import Header from '../Header/Header'

export default function DefaultComponent({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
