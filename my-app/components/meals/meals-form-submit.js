'use client';
import React from 'react'
import { useFormStatus } from 'react-dom'
function MealsFormSubmit() {
  const {pending} = useFormStatus();
 return <button disabled={pending}>
     {pending ? "submitted" : "Share Meal"}
     </button>
}

export default MealsFormSubmit
