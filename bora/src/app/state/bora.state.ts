export class BoraState {
    usuario: Usuario;
    evento: evento
}

export interface Usuario {
  idUsuario: any;
}

export interface cadastro {
  nome: string;
  email: string;
  senha: string;
  linkedin: string;
  fotoPerfil: string;
}

export interface evento{
    descricaoEvento: string
    nomeEvento: string
    localEvento: string
    dataEvento: string
    idUsuario: string
}

export interface mensagemEnviada {
    mensagem: string
    dataHoraEnvio: string
    idUsuarioDestino: string
    idUsuario: string
}
