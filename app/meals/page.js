import MealsGrid from '../components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meals, created {' '} <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and ccok it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/> 
      </main>
    </>
  )
};