import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '../../../../lib/meals'
import { notFound } from 'next/navigation';
export default function MealDeatilsPage({params}){
   
  const meals=getMeal(params.slug);

  if(!meals){
    notFound();
  }
    return (<>
         <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meals.image} fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meals.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meals.creator_email}`}>{meals.creator}</a>
                </p>
                <p className={classes.summary}>{meals.summary}</p>
            </div>
         </header>
        <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meals.instructions}}>
            </p>
        </main>
  
        
    </>
    )
}