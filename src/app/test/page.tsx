import React from 'react'

const Test = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return (
    <h1>Test</h1>
  )
}

export default Test