import 'package:costa_azul_desktop/features/login/login.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';


class AppDesktop extends StatelessWidget{
  const AppDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    // material appp é o que da a cara de app, ele define tudo
    return MaterialApp(
      theme: ThemeData(
        textTheme: GoogleFonts.dmSansTextTheme(),
      ),
      home: LoginPage(),
    );
    
  }

}