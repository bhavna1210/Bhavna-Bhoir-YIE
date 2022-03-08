import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-8">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-full flex items-center justify-center" style={{width: progress}}> {progress}</div>
    </div>
  )
}

export default ProgressBar