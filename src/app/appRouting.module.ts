import { NgModule } 						from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

// components
import { CuriosityRoverComponent } 	 from './rover_curiosity.component';
import { OpportunityRoverComponent } from './rover_opportunity.component';
import { SpiritRoverComponent } 		 from './rover_spirit.component';

const appRoutes: Routes = [
	{
    path:'',
    redirectTo: 'curiosity',
    pathMatch: 'full' 
  },
	{
		path: 'curiosity',
		component: CuriosityRoverComponent
	},
	{
		path: 'opportunity',
		component: OpportunityRoverComponent
	},
	{
		path: 'spirit',
		component: SpiritRoverComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
