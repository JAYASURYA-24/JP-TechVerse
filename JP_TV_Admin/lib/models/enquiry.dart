import 'package:cloud_firestore/cloud_firestore.dart';

class Enquiry {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String message;
  final String status;
  final DateTime createdAt;

  Enquiry({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.message,
    required this.status,
    required this.createdAt,
  });

  factory Enquiry.fromFirestore(DocumentSnapshot doc) {
    Map data = doc.data() as Map<String, dynamic>;
    return Enquiry(
      id: doc.id,
      name: data['name'] ?? '',
      email: data['email'] ?? '',
      phone: data['phone'] ?? '',
      message: data['message'] ?? '',
      status: data['status'] ?? 'New',
      createdAt: (data['createdAt'] as Timestamp?)?.toDate() ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'phone': phone,
      'message': message,
      'status': status,
      'createdAt': createdAt,
    };
  }
}
