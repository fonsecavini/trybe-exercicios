enum StudentStatus {
    Active = 1,
    Inactive,
    Paused
}


let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus); //saída: 2


enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }
  
  const ok = StatusCodes.OK;
  const indiceOk = StatusCodes["OK"];
  const stringBadRequest = StatusCodes[400];
  
  console.log(ok); //saída: 200
  console.log(indiceOk); //saída: 200
  console.log(stringBadRequest); //saída: BadRequest

  enum disaDaSemana {
      'domigo' = 1,
      'segunda',
      'terça',
      'quarta',
      'quinta',
      'sexta',
      'sábado'
  }

  const terça = disaDaSemana.terça;

  console.log(terça); // saída 3

  enum arcoIris {

  }

  enum bussola {
      N = 'Norte',
      L = 'Leste',
      S = 'Sul',
      O = 'Oeste',
  }

  const sul = bussola['Sul'];

  console.log(sul); // saída S
  


  