<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PesananResource\Pages;
use App\Models\Pesanan;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PesananResource extends Resource
{
    protected static ?string $model = Pesanan::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Blog';

    protected static ?string $slug = 'pesanan';
    protected static ?string $modelLabel = 'Pesanan';           
    protected static ?string $pluralModelLabel = 'Pesanan';     
    protected static ?string $navigationLabel = 'Pesanan';      
    protected static ?string $breadcrumb = 'Pesanan';       


    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('customer_id')
                ->label('Nama Customer')
                ->relationship('customers', 'nama')
                ->required(),

            Forms\Components\Select::make('layanan')
                ->options([
                    'Mobile App' => 'Mobile App',
                    'Website' => 'Website',
                    'Design UI/UX' => 'Design UI/UX',
                    'Sistem Informasi' => 'Sistem Informasi',
                    'AI Integration' => 'AI Integration',
                ])
                ->required(),

            Forms\Components\Textarea::make('pesan')
                ->label('Pesan')
                ->required(),

            Forms\Components\DateTimePicker::make('tanggal_submit')
                ->default(now())
                ->required(),
            
            Forms\Components\Toggle::make('is_confirm')
                ->label('Konfirmasi')
                ->default(false),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('customer.nama')
                ->label('Nama Customer')
                ->searchable(),

            Tables\Columns\TextColumn::make('layanan')
                ->sortable()
                ->searchable(),

            Tables\Columns\TextColumn::make('pesan')
                ->limit(50),

            Tables\Columns\TextColumn::make('tanggal_submit')
                ->label('Tanggal')
                ->dateTime()
                ->sortable(),

            Tables\Columns\TextColumn::make('is_confirm')
                ->label('Konfirmasi')
                ->formatStateUsing(fn ($state) => $state ? '✅ Sudah' : '❌ Belum'),
        ])
        ->actions([
            Action::make('toggle_konfirmasi')
            ->label(fn ($record) => $record->is_confirm ? 'Batalkan' : 'Konfirmasi')
            ->icon(fn ($record) => $record->is_confirm ? 'heroicon-o-x-circle' : 'heroicon-o-check-circle')
            ->color(fn ($record) => $record->is_confirm ? 'danger' : 'success')
            ->action(function ($record) {
                $record->update([
                    'is_confirm' => ! $record->is_confirm,
                ]);
            })
            ->requiresConfirmation()
        ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPesanan::route('/')
        ];
    }
}
