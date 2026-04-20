import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/enquiry.dart';

class EnquiryProvider with ChangeNotifier {
  final FirebaseFirestore _db = FirebaseFirestore.instance;
  List<Enquiry> _enquiries = [];
  bool _isLoading = false;

  List<Enquiry> get enquiries => _enquiries;
  bool get isLoading => _isLoading;

  EnquiryProvider() {
    fetchEnquiries();
  }

  Future<void> fetchEnquiries() async {
    _isLoading = true;
    notifyListeners();

    _db.collection('enquiries').orderBy('createdAt', descending: true).snapshots().listen((snapshot) {
      _enquiries = snapshot.docs.map((doc) => Enquiry.fromFirestore(doc)).toList();
      _isLoading = false;
      notifyListeners();
    });
  }

  Future<void> updateStatus(String id, String newStatus) async {
    try {
      await _db.collection('enquiries').doc(id).update({'status': newStatus});
    } catch (e) {
      print('Error updating status: $e');
    }
  }

  Future<void> deleteEnquiry(String id) async {
    try {
      await _db.collection('enquiries').doc(id).delete();
    } catch (e) {
      print('Error deleting enquiry: $e');
    }
  }
}
