import React from 'react'

function MealDetails({ params }) {
  return (
    <div>
     <h1>MealDetails</h1> 
     <p>{params.slug}</p>
    </div>
  )
}

export default MealDetails
