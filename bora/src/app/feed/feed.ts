export interface FeedResponse {
    id: string,
    dataEvento: string,
    nomeEvento: string,
    descricaoEvento: string,
    localEvento: string,
    idUsuario: string
}

export interface Usuario {
    fotoPerfil: string;
    linkedin: string;
    email: string;
    idUsuario: string;
    nome: string;
}