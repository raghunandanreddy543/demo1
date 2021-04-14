import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
export const appRoutes : Routes =[
    {path:'home',component: HomeComponent},
    {path:'quiz',component: QuizComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];