import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../providers/enquiry_provider.dart';
import '../models/enquiry.dart';
import 'enquiry_detail_screen.dart';

class EnquiryListScreen extends StatelessWidget {
  const EnquiryListScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Nexus Enquiries'),
        centerTitle: true,
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: Consumer<EnquiryProvider>(
        builder: (context, provider, child) {
          if (provider.isLoading && provider.enquiries.isEmpty) {
            return const Center(child: CircularProgressIndicator());
          }

          if (provider.enquiries.isEmpty) {
            return const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.inbox_outlined, size: 64, color: Colors.grey),
                  SizedBox(height: 16),
                  Text('No enquiries found', style: TextStyle(color: Colors.grey)),
                ],
              ),
            );
          }

          return ListView.builder(
            itemCount: provider.enquiries.length,
            padding: const EdgeInsets.all(8),
            itemBuilder: (context, index) {
              final enquiry = provider.enquiries[index];
              return Card(
                elevation: 2,
                margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                child: ListTile(
                  contentPadding: const EdgeInsets.all(16),
                  title: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(enquiry.name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                      _buildStatusBadge(enquiry.status),
                    ],
                  ),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          const Icon(Icons.email_outlined, size: 16),
                          const SizedBox(width: 8),
                          Text(enquiry.email),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Received on: ${DateFormat('MMM dd, yyyy • hh:mm a').format(enquiry.createdAt)}',
                        style: const TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                    ],
                  ),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => EnquiryDetailScreen(enquiry: enquiry),
                      ),
                    );
                  },
                ),
              );
            },
          );
        },
      ),
    );
  }

  Widget _buildStatusBadge(String status) {
    Color color;
    switch (status) {
      case 'Converted':
        color = Colors.green;
        break;
      case 'Contacted':
        color = Colors.blue;
        break;
      case 'New':
      default:
        color = Colors.orange;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color),
      ),
      child: Text(
        status,
        style: TextStyle(color: color, fontWeight: FontWeight.bold, fontSize: 12),
      ),
    );
  }
}
