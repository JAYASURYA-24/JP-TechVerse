import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:provider/provider.dart';
import 'providers/enquiry_provider.dart';
import 'screens/enquiry_list_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // NOTE: You must configure Firebase for your Flutter app using FlutterFire CLI
  // or by adding google-services.json (Android) and GoogleService-Info.plist (iOS).
  // await Firebase.initializeApp(); 
  
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => EnquiryProvider()),
      ],
      child: MaterialApp(
        title: 'Nexus Admin',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color(0xFF02b3e4),
            brightness: Brightness.light,
          ),
          appBarTheme: const AppBarTheme(
            elevation: 0,
            centerTitle: true,
          ),
        ),
        home: const EnquiryListScreen(),
      ),
    );
  }
}
