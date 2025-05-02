<?php

declare(strict_types=1);

namespace App\Http\Resources\Restaurant;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Category $resource
 */
class CategoryItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
        ];
    }
}
