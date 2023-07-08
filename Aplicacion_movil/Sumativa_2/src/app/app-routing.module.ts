import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard-service.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'mis-datos',
    redirectTo: 'mis-datos',
    pathMatch: 'full'
  },
  {
    path: 'provedores',
    redirectTo: 'provedores',
    pathMatch: 'full'
  },
  {
    path: 'transaccion',
    redirectTo: 'transaccion',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    redirectTo: 'historial',
    pathMatch: 'full'
  },
  
  {
    path: 'add-producto',
    redirectTo: 'add-producto',
    pathMatch: 'full'
  },
  {
    path: 'update-producto/:id',
    redirectTo: 'update-producto/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-producto/:id',
    redirectTo: 'detail-producto/:id',
    pathMatch: 'full'
  },
  {
    path: 'delete-producto/:id',
    redirectTo: 'delete-producto/:id',
    pathMatch: 'full'
  },
  {
    path: 'add-proveedor',
    redirectTo: 'add-proveedor',
    pathMatch: 'full'
  },
  {
    path: 'delete-proveedor/:id',
    redirectTo: 'delete-proveedor/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-proveedor/:id',
    redirectTo: 'detail-proveedor/:id',
    pathMatch: 'full'
  },
  {
    path: 'update-proveedor/:id',
    redirectTo: 'update-proveedor/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-transaccion/:id',
    redirectTo: 'detail-transaccion/:id',
    pathMatch: 'full'
  },
  {
    path: 'delete-transaccion/:id',
    redirectTo: 'delete-transaccion/:id',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/Users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
 
  
  {
    path: 'productos',
    loadChildren: () => import('./pages/Productos-CRUD/productos/productos.module').then( m => m.ProductosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./pages/mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
 
  {
    path: 'provedores',
    loadChildren: () => import('./pages/Proveedores-CRUD/provedores/provedores.module').then( m => m.ProvedoresPageModule)
  },
  {
    path: 'transaccion',
    loadChildren: () => import('./pages/Transacciones-CRUD/transaccion/transaccion.module').then( m => m.TransaccionPageModule)
  },
  
  {
    path: 'historial',
    loadChildren: () => import('./pages/Transacciones-CRUD/historial/historial.module').then( m => m.HistorialPageModule)
  },
  
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },

  {
    path: 'detail-transaccion/:id',
    loadChildren: () => import('./pages/Transacciones-CRUD/detail-transaccion/detail-transaccion.module').then( m => m.DetailTransaccionPageModule)
  },
  {
    path: 'add-producto',
    loadChildren: () => import('./pages/Productos-CRUD/add-producto/add-producto.module').then( m => m.AddProductoPageModule)
  },
  {
    path: 'update-producto/:id',
    loadChildren: () => import('./pages/Productos-CRUD/update-producto/update-producto.module').then( m => m.UpdateProductoPageModule)
  },
  {
    path: 'detail-producto/:id',
    loadChildren: () => import('./pages/Productos-CRUD/detail-producto/detail-producto.module').then( m => m.DetailProductoPageModule)
  },
  {
    path: 'delete-producto/:id',
    loadChildren: () => import('./pages/Productos-CRUD/delete-producto/delete-producto.module').then( m => m.DeleteProductoPageModule)
  },
  {
    path: 'add-proveedor',
    loadChildren: () => import('./pages/Proveedores-CRUD/add-proveedor/add-proveedor.module').then( m => m.AddProveedorPageModule)
  },
  {
    path: 'delete-proveedor/:id',
    loadChildren: () => import('./pages/Proveedores-CRUD/delete-proveedor/delete-proveedor.module').then( m => m.DeleteProveedorPageModule)
  },
  {
    path: 'detail-proveedor/:id',
    loadChildren: () => import('./pages/Proveedores-CRUD/detail-proveedor/detail-proveedor.module').then( m => m.DetailProveedorPageModule)
  },
  {
    path: 'update-proveedor/:id',
    loadChildren: () => import('./pages/Proveedores-CRUD/update-proveedor/update-proveedor.module').then( m => m.UpdateProveedorPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
