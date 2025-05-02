<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CreateDishRequest;
use App\Http\Requests\UpdateDishRequest;
use App\Http\Resources\Restaurant\DishDetailResource;
use App\Models\Dish;
use App\Models\Restaurant;
use Illuminate\Http\Resources\Json\JsonResource;

final class DishController extends Controller
{
    public function show(Restaurant $restaurant, Dish $dish): JsonResource
    {
        return new DishDetailResource($dish);
    }

    public function store(Restaurant $restaurant, CreateDishRequest $request): void
    {
        $dish = new Dish($request->validated());
        $dish->restaurant()->associate($restaurant);
        $dish->save();
    }

    public function update(Restaurant $restaurant, Dish $dish, UpdateDishRequest $request): void
    {
        $dish->update($request->validated());
    }

    public function destroy(Restaurant $restaurant, Dish $dish): void
    {
        $dish->delete();
    }
}
