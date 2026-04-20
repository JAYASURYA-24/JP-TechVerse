import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../models/enquiry.dart';
import '../providers/enquiry_provider.dart';

class EnquiryDetailScreen extends StatelessWidget {
  final Enquiry enquiry;

  const EnquiryDetailScreen({super.key, required this.enquiry});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Enquiry Details'),
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildCard(
              context,
              'Client Information',
              [
                _buildInfoRow(Icons.person, 'Name', enquiry.name),
                _buildInfoRow(Icons.email, 'Email', enquiry.email),
                _buildInfoRow(Icons.phone, 'Phone', enquiry.phone),
                _buildInfoRow(Icons.calendar_today, 'Date', DateFormat('MMMM dd, yyyy • hh:mm a').format(enquiry.createdAt)),
              ],
            ),
            const SizedBox(height: 16),
            _buildCard(
              context,
              'Message',
              [
                Text(enquiry.message, style: const TextStyle(fontSize: 16, height: 1.5)),
              ],
            ),
            const SizedBox(height: 16),
            _buildStatusCard(context),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton.icon(
                onPressed: () {
                  // Implement call functionality
                },
                icon: const Icon(Icons.call),
                label: const Text('Call Client'),
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCard(BuildContext context, String title, List<Widget> children) {
    return Card(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: Theme.of(context).colorScheme.outlineVariant),
      ),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Theme.of(context).colorScheme.primary)),
            const Divider(height: 24),
            ...children,
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 20, color: Colors.grey),
          const SizedBox(width: 12),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(label, style: const TextStyle(fontSize: 12, color: Colors.grey)),
              Text(value, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildStatusCard(BuildContext context) {
    return _buildCard(
      context,
      'Manage Status',
      [
        Wrap(
          spacing: 8,
          children: ['New', 'Contacted', 'Converted'].map((status) {
            final isSelected = enquiry.status == status;
            return ChoiceChip(
              label: Text(status),
              selected: isSelected,
              onSelected: (selected) {
                if (selected) {
                  Provider.of<EnquiryProvider>(context, listen: false)
                      .updateStatus(enquiry.id, status);
                  Navigator.pop(context); // Go back after updating
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('Status updated to $status')),
                  );
                }
              },
            );
          }).toList(),
        ),
      ],
    );
  }
}
