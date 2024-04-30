<?php



use App\Models\Roles;
use App\Models\Tema;
use App\Models\Categorias;
use App\Models\Usuarios;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run()
    {
        Roles::create(['nombre' => 'amor',]);
        Tema::create(['nombre' => 'sexo',]);
        Categorias::create(['nombre' => 'infidelidad',]);
        Usuarios::create([
            'nombre' => 'jorge',
            'email' => 'jorge@gmail.com',
            'password' => 'ellanomeama',
            'rol_id' => 1,
            'imagen_usuario' => 'aeaa']);
    }
}
