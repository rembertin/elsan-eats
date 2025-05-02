<?php

declare(strict_types=1);

namespace App\Http\Resources\Restaurant;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Restaurant $resource
 */
final class RestaurantDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'categoryId' => $this->resource->category_id,
            'dishes' => DishItemResource::collection($this->resource->dishes),
        ];
    }
}
