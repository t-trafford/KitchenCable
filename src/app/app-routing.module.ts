import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'recipe/:id', loadChildren: './recipe/recipe.module#RecipePageModule', canActivate: [AuthGuard] },
  { path: 'mealplanner', loadChildren: './mealplanner/mealplanner.module#MealplannerPageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'parseingredient', data: { reuse: true }, loadChildren: './parseingredient/parseingredient.module#ParseingredientPageModule', canActivate: [AuthGuard] },
  { path: 'myingredient', data: { reuse: true }, loadChildren: './myingredient/myingredient.module#MyingredientPageModule', canActivate: [AuthGuard] },
  { path: 'overview', data: { reuse: true }, loadChildren: './overview/overview.module#OverviewPageModule', canActivate: [AuthGuard] },
  { path: 'ingredients', data: { reuse: true }, loadChildren: './ingredients/ingredients.module#IngredientsPageModule', canActivate: [AuthGuard] },
  { path: 'steps', data: { reuse: true }, loadChildren: './steps/steps.module#StepsPageModule', canActivate: [AuthGuard] },
  { path: 'nutrition', data: { reuse: true }, loadChildren: './nutrition/nutrition.module#NutritionPageModule', canActivate: [AuthGuard] },
  { path: 'myrecipe', data: { reuse: true }, loadChildren: './myrecipe/myrecipe.module#MyrecipePageModule', canActivate: [AuthGuard] },
  { path: 'myrecipes', data: { reuse: true }, loadChildren: './myrecipes/myrecipes.module#MyrecipesPageModule', canActivate: [AuthGuard] },
  { path: 'favorite', data: { reuse: true }, loadChildren: './favorite/favorite.module#FavoritePageModule', canActivate: [AuthGuard] },
  { path: 'daily', loadChildren: './daily/daily.module#DailyPageModule', canActivate: [AuthGuard] },
  { path: 'weekly', loadChildren: './weekly/weekly.module#WeeklyPageModule', canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
