
import 'package:flutter/material.dart';

class FormularioLogin extends StatefulWidget{ // tem estado
  const FormularioLogin ({super.key});
  
  @override
  State<FormularioLogin> createState() => FormularioLoginState();
}

// criação do estado 

class FormularioLoginState extends State<FormularioLogin>
{
  // controles de captação de dados

  final emailController = TextEditingController();
  final senhaController = TextEditingController();

  // qual perfil
  String perfilSelecionado = 'companhia'; // variavél que guarda o botão selecionado 

// mensagem de erro
  String? mensagemErro; // indica ? null

  
  @override
  Widget build(BuildContext context) {
    // container da pagina inteira - todo o quadrado
    return Container(
      color: Color(0xFFF1F1F1),
      child: Center(
        child: Container( // container do formulario 
          width: 420, // largura dele
          padding: EdgeInsets.all(48), // padding em todos os lados?
          decoration: BoxDecoration( // decoração do box
            color: Colors.white,
            borderRadius: BorderRadius.circular(16), // pq radius circular?
            border: Border.all(color: Colors.black26) 
          ),

          // dentro desse 
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.center,

            children: [

              Text(
                'Acesso ao sistema',
                style: TextStyle(
                  fontSize: 26, fontWeight: FontWeight.w900
          
                ),
              ),

              SizedBox(height: 8,),

              Text(
                'Selecione seu perfil de gestão e insira suas credenciais ',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.grey,
                  fontSize: 14,
                ),
              ),

              SizedBox(height: 32,),

              //Label

              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Escolha seu perfil de acesso',
                  style: TextStyle(
                    fontSize: 13, color: Colors.black87),
                ),
              ),

              SizedBox(height: 8,),

              // Botões de perfil

              Row(
                children: [
                  _botaoPerfil('Companhia', 'companhia'),
                  SizedBox(width: 12,),
                   _botaoPerfil('Tripulação', 'tripulacao'),
                ],
              ),

              SizedBox(height: 24,),

              // campo email
            Align(
              alignment: AlignmentGeometry.centerLeft,
              child: Text('E-mail', style: TextStyle(fontSize: 13)),
              ), 

              SizedBox(height: 6,),

              TextField(
                controller: emailController,
                decoration: InputDecoration(
                  hintText: 'nome.sobrenome@email.corporativo.com',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                  )
                ),
              ),

              SizedBox(height: 16,),

              // campo senha

              Align(
                alignment: Alignment.centerLeft,
                child: Text('Senha', style: TextStyle(fontSize: 13)),
              ),
              SizedBox(height: 6),
              TextField(
                controller: senhaController,
                obscureText: true, // esconde a senha
                decoration: InputDecoration(
                  hintText: 'Digite sua senha',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
              ),


              // ESQUECEU A SENHA
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: () {},
                  child: Text('Esqueceu a senha?',
                    style: TextStyle(fontSize: 12, color: Color(0xFF1B5E99)),
                  ),
                ),
              ),

            // MENSAGEM DE ERRO

            if(mensagemErro != null)
            Container(
              width: double.infinity,
              padding: EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.red.shade50,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: Colors.red.shade200),
              ),
              child: Text(mensagemErro!,
              style: TextStyle(color: Colors.red, fontSize: 13),),
            ),

            
          SizedBox(height: 24,),

          //botão entrar

          SizedBox(
            width: double.infinity,
            height: 48,
            child: ElevatedButton(
              onPressed: _fazerLogin, 
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF1B5E99),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadiusGeometry.circular(8),
                ),
              ),
              child: Text('Entrar', style: TextStyle(color: Colors.white, fontSize: 16),),

            ),
          )

            ],
          ),
        ), // Container da caixa
      ), //Centralização da caixa
    ); // Pagina toda
  }

  // botão perfil

Widget _botaoPerfil(String label, String valor){
  bool selecionado = perfilSelecionado == valor;

  return Expanded(
    child: OutlinedButton(
      onPressed: () => setState(() => perfilSelecionado = valor), 
      style: OutlinedButton.styleFrom(
        backgroundColor: selecionado ? Color(0xFF1B5E99) : Colors.white,
          foregroundColor: selecionado ? Colors.white : Color(0xFF1B5E99),
          side: BorderSide(color: Color(0xFF1B5E99)),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
      ),
      ),
      child: Text(label),
  ),
  );
}

// lógica de login
  void _fazerLogin() {
    setState(() => mensagemErro = null);

    // validação de campos vazios
    if (emailController.text.isEmpty || senhaController.text.isEmpty) {
      setState(() => mensagemErro = 'Preencha todos os campos!');

      return;
    }

    // validação de formato de email
    if (!emailController.text.contains('@')) {
      setState(() => mensagemErro = 'E-mail inválido!');
      return;
    }

    // por enquanto simula login — navegação vem depois
    setState(() => mensagemErro = 'Usuário ou senha incorretos, por favor tente novamente!');
  }
  
}


