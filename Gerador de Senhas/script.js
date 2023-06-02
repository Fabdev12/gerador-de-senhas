function gerarSenha() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;

  const caracteresEspeciais = "!@#$%&";
  const numeros = "0123456789";

  // Obter as iniciais do nome e sobrenome
  const iniciais = nome.charAt(0) + sobrenome.charAt(0);

  // Obter os últimos dois dígitos do ano de nascimento
  const ano = dataNascimento.slice(2, 4);

  // Gerar uma sequência de caracteres aleatórios
  let caracteresAleatorios = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(
      Math.random() * (numeros.length + caracteresEspeciais.length)
    );
    const randomChar =
      randomIndex < numeros.length
        ? numeros[randomIndex]
        : caracteresEspeciais[randomIndex - numeros.length];
    caracteresAleatorios += randomChar;
  }

  // Combinação final da senha
  const senha = iniciais + ano + caracteresAleatorios;

  document.getElementById("senhaGerada").innerText = "Senha gerada: " + senha;
}
