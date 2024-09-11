import React from 'react'

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 text-center bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-600">An unexpected error occurred. Please try again later.</p>
      </div>
    </div>
  )
}

export default Error