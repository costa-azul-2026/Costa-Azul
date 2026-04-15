import 'package:flutter/material.dart';

// praticas de consturção de classe maisculas
class PainelEsquerdo extends StatelessWidget
{
  const PainelEsquerdo({super.key});

  @override
  Widget build(BuildContext context) {

// stack organiza as coisas como um bolo.
    return Stack(
      fit: StackFit.expand,
      children: [

        // CAMADA 01 FUNDO

        Positioned.fill( // faz que o widget ocupme todo o stac
          child: Image.asset(
            'assets/imagens/fundo2.png',
            fit: BoxFit.cover,
            )
          ),


          // CAMADA 02 overlay escuro por cima

          Positioned.fill(
            child: Container(
              color: Color(0xFF01192D).withOpacity(0.80),
            ) 
          ),


          // CAMADA 03 - contudo
        Column(
        crossAxisAlignment: CrossAxisAlignment.center, // alinhamento do eixo cruzado: vertical, toda coluna fica centralizada

        children: [
          
          // Cabeçalho

          Padding(padding:EdgeInsets.fromLTRB(85, 70, 98, 0),
          child: Column( // coluna horizontal, meio que cria uma box.
            crossAxisAlignment: CrossAxisAlignment.center, // esse agrupamento fica centralizado entre si 
            children: [
              Image.asset('assets/imagens/logo1.png', width: 320),
              SizedBox(height: 15), // espaço entre a logo e sistema
              Text(
                'Sistema de gestão', style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                  fontWeight: FontWeight.w600,
                ),
              )
            ], // fim do children 
            ),
          ),

          // espaço no meio
          SizedBox(height: 170,),

          Padding(padding: EdgeInsets.symmetric(horizontal: 40),  // aplica mesmo valor para ambos os lados.
          child: Text(
            'Plataforma integrada para gestão de cruzeiros - embarcações, rotas, tripulação e operações em um só lugar.',
            style: TextStyle(color: Colors.white70, fontSize: 18, fontWeight: FontWeight.w400), textAlign: TextAlign.center,
            ),
          ),

          SizedBox(height: 104),

          // copy
          Padding(padding: EdgeInsets.all(32),
          child: Text('© Costa Azul – Uso interno', 
          style: TextStyle(color: Colors.white38, fontSize: 12),
          ),

          )

        ],
      ),

      ],
      
      
    );
  }
 

}