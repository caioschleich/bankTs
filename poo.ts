// poo: paradigma de programação
// --> dados como atributos (atributos são por exemplo: nome, idade)
// --> códigos como métodos (procedimentos)
// abstração: pensar no objeto que iremos criar e como implementar seus métodos e atributos
// herança: uma classe compartilha características com outra (métodos e atributos), evitando repetição de código
// polimorfismo: classe filha chama um método com assinatura diferente (fluxo fica diferente do original)

/*
const user = {
  nome: 'Caio',
  idade: 34,
  showNome(){
    console.log(this.nome)
  }
}

const otherUser = {
  nome: 'Vanessa',
  idade: 29,
  showNome(){
    console.log(this.nome)
  }
}
*/

class User {

  name: string = ''
  age: number = 0

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  showName(){
    console.log(this.name)
  }
}

const user1 = new User('Caio', 34)
user1.showName()

const user2: User = new User('Vanessa', 29)
user2.showName()

