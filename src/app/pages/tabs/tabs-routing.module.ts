import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'startpage',
        loadChildren: () => import('../startpage/startpage.module').then(m => m.StartpagePageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../feed-tab/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../photos-tab/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../search-tab/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../team-tab/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {} 