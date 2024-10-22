import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../Components/CustomText';
import notification_styles from '../Styles/Notification.style';
import CategoryHeader from '../Components/CategoryHeader';

// Promotional messages and titles
const promotionalData = [
  {
    title: 'Diskon 20% untuk pembayaran BPJS!',
    description: 'Dapatkan diskon 20% untuk pembayaran BPJS!',
  },
  {
    title: 'Bonus saldo untuk pembayaran listrik!',
    description: 'Pembayaran listrik tepat waktu, dapatkan bonus saldo Rp 10.000!',
  },
  {
    title: 'Bonus pulsa untuk isi ulang!',
    description: 'Isi pulsa Rp 50.000, dapatkan bonus pulsa Rp 5.000!',
  },
  {
    title: 'Cashback untuk bayar BPJS!',
    description: 'Bayar BPJS sebelum tanggal 5, dapatkan cashback 10%!',
  },
  {
    title: 'Hemat hingga 15%!',
    description: 'Beli paket listrik dan hemat hingga 15%!',
  },
  {
    title: 'Bonus kuota untuk isi ulang!',
    description: 'Isi ulang pulsa, dapatkan bonus kuota internet!',
  },
  {
    title: 'Gratis biaya admin!',
    description: 'Pembayaran listrik sekarang, gratis biaya admin!',
  },
  {
    title: 'Potongan harga transaksi BPJS!',
    description: 'Promo spesial: Bayar BPJS, dapatkan potongan harga transaksi!',
  },
  {
    title: 'Diskon untuk isi pulsa!',
    description: 'Isi pulsa, nikmati diskon untuk pembelian berikutnya!',
  },
  {
    title: 'Voucher belanja untuk bayar listrik!',
    description: 'Promo khusus: Bayar tagihan listrik, dapatkan voucher belanja!',
  },
  {
    title: 'Diskon untuk semua transaksi BPJS!',
    description: 'Dapatkan diskon 5% untuk semua transaksi BPJS!',
  },
  {
    title: 'Ekstra diskon untuk bayar pulsa!',
    description: 'Bayar pulsa dan dapatkan ekstra diskon untuk bulan depan!',
  },
  {
    title: 'Hadiah menarik setiap pembayaran!',
    description: 'Ikuti program loyalitas kami, dapatkan hadiah menarik setiap pembayaran!',
  },
  {
    title: 'Perlindungan kesehatan dengan diskon!',
    description: 'Pembayaran BPJS, tingkatkan perlindungan kesehatan Anda dengan diskon spesial!',
  },
  {
    title: 'Bonus saldo untuk transaksi hari ini!',
    description: 'Transaksi hari ini, dapatkan bonus saldo Rp 15.000 untuk pembayaran selanjutnya!',
  },
];

const NotificationScreen = ({ navigation }) => {
  const renderNotificationCard = ({ item }) => (
    <TouchableOpacity style={notification_styles.card}>
      <CustomText style={notification_styles.cardTitle}>{item.title}</CustomText>
      <CustomText style={notification_styles.cardDescription}>{item.description}</CustomText>
    </TouchableOpacity>
  );

  return (
    <View style={notification_styles.container}>
      <CategoryHeader title="Notifikasi" />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <FlatList
          data={promotionalData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title} 
          renderItem={renderNotificationCard}
          contentContainerStyle={notification_styles.listContainer}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
