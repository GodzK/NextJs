import React from "react";
import {notFound} from 'next/navigation';
import { getMeal } from '@/lib/meals';
import Image from "next/image";
import classes from "./page.module.css";
function MealDetails({ params }) {
  const mealfetch = getMeal(params.meals);
  if (!mealfetch){
    notFound();
  }
  mealfetch.instructions = mealfetch.instructions.replace (/\n/g , '<br/>');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src = {mealfetch.image} alt = {mealfetch.title}fill />
        </div>
        <div className={classes.headerText}>
          <h1>{mealfetch.title}</h1>
          <p className={classes.creator}>
            by <a href={`mail goes to : ${mealfetch.creator_email}`}>{mealfetch.creator}</a>
          </p>
          <p className={classes.summary}>{mealfetch.summary}</p>
        </div>
      </header>
      <mian>
        {/* cross site scripting  */}
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: mealfetch.instructions,
        }}></p>
      </mian>
    </>
  );
}

export default MealDetails;
