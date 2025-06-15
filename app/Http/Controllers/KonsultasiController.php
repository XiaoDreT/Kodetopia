<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KonsultasiController extends Controller
{
    public function store(Request $request) {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:100',
            'email' => 'required|email',
            'layanan' => 'required|string|max:100',
            'pesan' => 'required|string|max:1000',
            'tanggal_submit' => 'required|date',
            'no_hp' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Create Customer
        $kostumer = Customer::create([
            'nama' => $request->get('nama'),
            'email' => $request->get('email'),
            'no_hp' => $request->get('no_hp'),
        ]);

        // Create Pesanan
        $konsultasi = Pesanan::create([
            'customer_id' => $kostumer->customer_id,
            'layanan' => $request->get('layanan'),
            'pesan' => $request->get('pesan'),
            'tanggal_submit' => $request->get('tanggal_submit'),
            'admin_id' => null,
            'is_confirm' => false,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Data konsultasi berhasil tersimpan.',
            'data' => $konsultasi
        ], 201);
    }
}
