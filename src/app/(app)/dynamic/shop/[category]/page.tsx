import React from 'react'

const Category = async({ params }: 
  { params: Promise<{ category: string }> }) => {
  const { category } = await params
  return (
    <div>Category : {category}</div>
  )
}

export default Category