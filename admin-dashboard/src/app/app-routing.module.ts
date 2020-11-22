import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  { path: 'article', component: ArticleListComponent },
  { path: 'article/add-article', component: AddArticleComponent},
  { path: 'article/update-article/:id', component: UpdateArticleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
