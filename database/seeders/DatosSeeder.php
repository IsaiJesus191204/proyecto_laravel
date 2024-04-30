<?php

namespace Database\Seeders;

use App\Models\Dato;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dato::create(['nombre' => 'Dato 1']);
        Dato::create(['nombre' => 'Dato 2']);
    }
}
