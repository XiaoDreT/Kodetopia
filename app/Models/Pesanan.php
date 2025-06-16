<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Pesanan extends Model
{
    use HasFactory;

    // Tentukan nama tabel yang sesuai
    protected $table = 'pesanan';  // Gunakan nama tabel yang benar (misalnya 'pesanan')

    // Kolom yang diizinkan untuk penugasan massal
    protected $fillable = [
        'nama',
        'email',
        'no_telepon',
        'status',
        'layanan',
        'order_date',
    ];

    // Set default value untuk order_date sebelum disimpan
    protected static function booted()
    {
        static::creating(function ($pesanan) {
            if (!$pesanan->order_date) {
                $pesanan->order_date = Carbon::now();  // Set order_date jika belum ada nilai
            }
        });
    }
}
