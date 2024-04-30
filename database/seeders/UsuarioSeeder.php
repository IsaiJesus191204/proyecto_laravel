<?php

use Illuminate\Database\Seeder;
use App\Models\Usuarios;


class UsuarioSeeder extends Seeder
{

     public function run()

     {
          Usuarios::create(['nombre' => 'amor']);
          Usuarios::create(['email' => 'jorge@gmail.com']);
          Usuarios::create(['password' => 'ellanomeama']);
          Usuarios::create(['rol_id' => 1]);
          Usuarios::create(['imagen_usuario' => 'aeaa']);
     }
}
