'use client' ;
import React from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
function MealsPage() {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meal , created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun !
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/>
      </main>
    </div>
  );
}

export default MealsPage;
