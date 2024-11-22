import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import getMeals from "../../../lib/meals";
async function Meals(){
  const meals=await getMeals();
  return <MealsGrid meals={meals} />
}
export default async function Meal() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious food created{" "}
          <span className={classes.highlight}>for you</span>
          <p>
            chose your favourite receipe for cook it for yourself. It is easy
            and fun.
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share"> Share Your Favourite Receipe</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>

        <Meals />
        </Suspense>
      </main>
    </>
  );
}
