<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

final class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categories')->insert([
            ['name' => 'Italien'],
            ['name' => 'Sandwich'],
            ['name' => 'Tartes'],
            ['name' => 'Indonésien'],
        ]);
    }
}
