<?php

namespace App\Filament\Resources\PesananResource\Pages;

use App\Filament\Resources\PesananResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPesanan extends ListRecords
{
    protected static string $resource = PesananResource::class;

    public function getTitle(): string
    {
        return 'Pesanan';
    }
}
