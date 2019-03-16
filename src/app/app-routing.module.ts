import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'mealplanner', loadChildren: './mealplanner/mealplanner.module#MealplannerPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'parseingredient', loadChildren: './parseingredient/parseingredient.module#ParseingredientPageModule' },
  { path: 'myingredient', loadChildren: './myingredient/myingredient.module#MyingredientPageModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewPageModule' },
  { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsPageModule' },
  { path: 'steps', loadChildren: './steps/steps.module#StepsPageModule' },
  { path: 'nutrition', loadChildren: './nutrition/nutrition.module#NutritionPageModule' },
  { path: 'myrecipe', loadChildren: './myrecipe/myrecipe.module#MyrecipePageModule' },
  { path: 'myrecipes', loadChildren: './myrecipes/myrecipes.module#MyrecipesPageModule' },
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
