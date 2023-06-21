import { NgModule } from '@angular/core';
//RouterModule and Routes add routing functionality
import { RouterModule, Routes} from "@angular/router";
//is the view that should be showms
import { HeroesComponent} from "./heroes/heroes.component";

//a typical angular route has 1. a path (the url), 2. a component (the view)
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
]


@NgModule({
  //adds the RouterModule to the module and configures it with the routes we defined above. method is called forRoot because routes are configured at the root level.
  imports: [RouterModule.forRoot(routes)],
  //RouterModule is exported to be used throughout the applicationg
  exports: [RouterModule]
})
export class AppRoutingModule { }
