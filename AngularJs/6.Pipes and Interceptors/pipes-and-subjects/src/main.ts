import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Subject } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//! SUBJECTS

const subj$$ = new Subject()
subj$$.subscribe(console.log) //A
subj$$.next(123) //A
subj$$.subscribe(console.log) //B
subj$$.subscribe(console.log) //C
subj$$.next(123) //ABC

subj$$.subscribe({
  next: console.log,
  error: (err) => console.log(err),
  complete: () => console.log('completed')

}
)