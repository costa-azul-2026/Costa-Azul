
import 'package:costa_azul_desktop/features/login/widgets/formulario_login.dart';
import 'package:costa_azul_desktop/features/login/widgets/painelesquerdo.dart';
import 'package:flutter/material.dart';


class LoginPage extends StatelessWidget
{
  @override
  Widget build(BuildContext context) {
    
    // widget especial que define as coisas
    return Scaffold(
      body: Row(
        children: [
          // expande a tela em proporções, como um grid
          Expanded(
            flex: 3,
            child:PainelEsquerdo(), // tela esquerda, 
          ),

          Expanded(
            flex: 5,
            child: FormularioLogin(), // tela direita
            ),
        ],
      ),
    );
  }
  
}