<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\Restaurant\CategoryItemResource;
use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryController extends Controller
{
    public function index(): JsonResource
    {
        return CategoryItemResource::collection(Category::all());
    }
}
