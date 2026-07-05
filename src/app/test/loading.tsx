import React from 'react'

const Loading = () => {
  return (

    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-8 border-t-8 border-white border-t-transparent shadow-lg">
      Loading...
      </div>
    </div>
  )
}

export default Loading