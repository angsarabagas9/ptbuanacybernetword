'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertTriangle, Scale, Users, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="PT BUANA CYBER NETWORK Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-green-800">PT BUANA CYBER NETWORK</h1>
                <p className="text-xs text-gray-600">Perdagangan Besar Binatang Hidup</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-green-600 font-medium">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white py-12 px-4 border-b border-green-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="text-green-700">PT BUANA CYBER NETWORK</span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <strong>PT BUANA CYBER NETWORK</strong>. Syarat dan Ketentuan ini 
                mengatur penggunaan layanan perdagangan hewan hidup yang kami sediakan. 
                Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat 
                oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Package className="w-6 h-6 mr-2" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>PT BUANA CYBER NETWORK</strong> menyediakan layanan perdagangan besar 
                binatang hidup meliputi:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Perdagangan Hewan Ternak:</strong> Sapi, kerbau, kambing, domba, dan hewan ternak lainnya</li>
                <li><strong>Hewan Peliharaan:</strong> Berbagai jenis hewan peliharaan dengan kualitas terjamin</li>
                <li><strong>Konsultasi:</strong> Layanan konsultasi mengenai perawatan dan bisnis hewan</li>
                <li><strong>Logistik:</strong> Pengiriman hewan dengan standar kesejahteraan tertinggi</li>
                <li><strong>Dokumentasi:</strong> Pengurusan surat-surat dan sertifikat resmi</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna layanan <strong>PT BUANA CYBER NETWORK</strong>, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memberikan informasi yang akurat, lengkap, dan terkini</li>
                <li>Memiliki kapasitas hukum untuk melakukan transaksi perdagangan hewan</li>
                <li>Mematuhi semua peraturan dan undang-undang yang berlaku mengenai perdagangan hewan</li>
                <li>Menyediakan fasilitas yang sesuai untuk perawatan hewan yang dibeli</li>
                <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                <li>Tidak menggunakan layanan untuk kegiatan ilegal atau tidak etis</li>
                <li>Menjaga kerahasiaan informasi bisnis yang dibagikan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Animal Welfare */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Kesejahteraan Hewan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami berkomitmen terhadap kesejahteraan hewan dan mengharuskan semua pengguna untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Memperlakukan semua hewan dengan humanis dan bertanggung jawab</li>
                <li>Memastikan kebutuhan dasar hewan terpenuhi (makanan, air, tempat tinggal)</li>
                <li>Memberikan perawatan medis yang diperlukan</li>
                <li>Mematuhi standar kesejahteraan hewan yang berlaku di Indonesia</li>
                <li>Tidak melakukan kekerasan atau kekejaman terhadap hewan</li>
                <li>Memastikan transportasi hewan aman dan nyaman</li>
              </ul>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-medium">
                  ⚠️ Pelanggaran terhadap standar kesejahteraan hewan dapat mengakibatkan 
                  penghentian layanan dan tindakan hukum sesuai ketentuan yang berlaku.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Syarat Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Ketentuan pembayaran untuk layanan <strong>PT BUANA CYBER NETWORK</strong>:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Deposit:</strong> Minimal 30% dari total transaksi untuk pemesanan</li>
                <li><strong>Pelunasan:</strong> Sebelum pengiriman atau penyerahan hewan</li>
                <li><strong>Metode Pembayaran:</strong> Transfer bank, tunai, atau metode yang disetujui</li>
                <li><strong>Pembatalan:</strong> Deposit tidak dapat dikembalikan jika pembatalan dilakukan 
                kurang dari 7 hari sebelum transaksi</li>
                <li><strong>Harga:</strong> Harga dapat berubah sesuai kondisi pasar dan ketersediaan</li>
                <li><strong>Pajak:</strong> Semua harga belum termasuk pajak yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery Terms */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Syarat Pengiriman</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Ketentuan pengiriman hewan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pengiriman hanya dilakukan setelah pembayaran lunas</li>
                <li>Biaya pengiriman ditanggung oleh pembeli kecuali disepakati lain</li>
                <li>Waktu pengiriman tergantung pada lokasi dan ketersediaan transportasi</li>
                <li>Pembeli harus menyediakan fasilitas penerimaan yang memadai</li>
                <li>Inspeksi hewan dapat dilakukan saat penyerahan</li>
                <li>Klaim kerusakan atau masalah harus disampaikan maksimal 24 jam setelah penerimaan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Health Guarantee */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Jaminan Kesehatan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>PT BUANA CYBER NETWORK</strong> memberikan jaminan kesehatan sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Semua hewan dilengkapi dengan sertifikat kesehatan dari dokter hewan resmi</li>
                <li>Vaksinasi dasar telah dilakukan sesuai standar</li>
                <li>Jaminan kesehatan berlaku selama 7 hari setelah pembelian</li>
                <li>Penggantian atau pengobatan akan diberikan jika hewan terbukti sakit saat pembelian</li>
                <li>Jaminan tidak berlaku jika kesalahan perawatan dari pembeli</li>
              </ul>
            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Scale className="w-6 h-6 mr-2" />
                Kepatuhan Hukum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Semua transaksi dan aktivitas melalui <strong>PT BUANA CYBER NETWORK</strong> harus 
                mematuhi:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Undang-Undang Kesejahteraan Hewan Indonesia</li>
                <li>Peraturan Menteri Pertanian mengenai perdagangan hewan</li>
                <li>Peraturan Daerah setempat mengenai pemeliharaan hewan</li>
                <li>Konvensi internasional yang diratifikasi Indonesia</li>
                <li>Peraturan karantina hewan</li>
                <li>Standar keamanan pangan untuk hewan konsumsi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>PT BUANA CYBER NETWORK</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Kerugian yang timbul akibat kelalaian pemeliharaan oleh pembeli</li>
                <li>Kematian atau penyakit yang terjadi setelah periode jaminan</li>
                <li>Kerugian bisnis yang timbul dari transaksi hewan</li>
                <li>Biaya perawatan yang melebihi nilai hewan</li>
                <li>Kerusakan akibat force majeure (bencana alam, wabah, dll)</li>
                <li>Pelanggaran peraturan yang dilakukan oleh pembeli</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Penyelesaian Sengketa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Negosiasi:</strong> Upaya penyelesaian secara damih antara kedua belah pihak</li>
                <li><strong>Mediasi:</strong> Melalui mediator profesional jika negosiasi gagal</li>
                <li><strong>Arbitrase:</strong> Melalui Badan Arbitrase Nasional Indonesia (BANI)</li>
                <li><strong>Pengadilan:</strong> Pengadilan Negeri Bekasi sebagai yurisdiksi terakhir</li>
              </ol>
              <p className="text-gray-700">
                Hukum yang berlaku adalah hukum Republik Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Semua konten, merek dagang, logo, dan materi milik <strong>PT BUANA CYBER NETWORK</strong> 
                dilindungi oleh hukum hak kekayaan intelektual. Anda tidak diperbolehkan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Menggunakan logo atau merek dagang kami tanpa izin tertulis</li>
                <li>Menyalin konten website untuk tujuan komersial</li>
                <li>Membuat produk turunan dari layanan kami</li>
                <li>Menggunakan data pelanggan untuk tujuan pemasaran</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Penghentian Layanan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>PT BUANA CYBER NETWORK</strong> berhak menghentikan atau menangguhkan 
                layanan jika:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pengguna melanggar syarat dan ketentuan ini</li>
                <li>Pengguna terlibat dalam aktivitas ilegal</li>
                <li>Terdapat bukti penelantaran atau kekejaman hewan</li>
                <li>Pengguna gagal melakukan pembayaran</li>
                <li>Alasan keamanan atau kepatuhan regulasi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-green-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <strong>PT BUANA CYBER NETWORK</strong><br/>
                  Persada raya Blok A 11 No 36<br/>
                  Desa/Kelurahan Cibarusah Kota<br/>
                  Kec. Cibarusah, Kab. Bekasi<br/>
                  Provinsi Jawa Barat 17340
                </p>
                <p className="text-gray-700">
                  📞 082312042902<br/>
                  📧 legal@buanacybernetwork.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Perubahan Syarat & Ketentuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan 
                diinformasikan melalui website atau email. Penggunaan lanjutan layanan 
                kami setelah perubahan menunjukkan persetujuan Anda terhadap syarat yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PT BUANA CYBER NETWORK</h3>
              <p className="text-green-100">
                Perusahaan terpercaya dalam bidang perdagangan besar binatang hidup 
                dengan komitmen terhadap kualitas dan kesejahteraan hewan.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-green-100 hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/privacy" className="text-green-100 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-green-100 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-green-100">
                <p>📍 Cibarusah, Bekasi, Jawa Barat 17340</p>
                <p>📞 082312042902</p>
                <p>📧 info@buanacybernetwork.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 PT BUANA CYBER NETWORK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}