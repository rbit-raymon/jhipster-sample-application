import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'note',
        data: { pageTitle: 'jhipsterSampleApplicationApp.note.home.title' },
        loadChildren: () => import('./note/note.module').then(m => m.NoteModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
