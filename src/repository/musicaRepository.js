import con from "./connection.js";

export async function inserirMusica(musica) {
    const comando =`
    insert into tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacao, hr_duracao, bt_destaque, ds_idioma)
    values (?, ?, ?, ?, ?, ?, ?, ?)
    
    
    
    `;
    let resposta = await con.query(comando, [musica.nome, musica.artista, musica.lancamento, musica.visualizacao, musica.duracao, musica.destaque, musica.idioma])
    let info = resposta[0];

return info.InsertId;


}

export async function consultarMusica() {
    const comando = `
    
    select  id_musica           id,
            nm_musica           nome,
            ds_artista          artista,
            url_musica          url,
            dt_lancamento       lancamento,
            qtd_visualizacao    visualizacoes        
            hr_duracao          duracao
            bt_destaque         destaque
            ds_idioma           idioma

        `;       
let resposta = await con.query(comando);
let registros = resposta[0];

return registros;
}

export async function alterarMusica(id, musica){
const comando = `
        update tb_musica
            set nm_musica = ?,
                ds_artista = ?,
                url_musica = ?,
                dt_lancamento = ?,
                qtd_visualizacao = ?,
                hr_duracao = ?,
                bt_destaque = ?,
                ds_idioma = ?
        where id_musica =?
`
let resposta = await con.query(comando, [musica.nome, musica.artista, musica.lancamento, musica.visualizacao, musica.duracao, musica.destaque, musica.idioma])
let info = resposta[0];
    
return info.affectedRows;

}

export async function  removerMusica(id) {
    const comando = `
    delete from tb_musica
    where id_musica = ?

    `
let resposta = await con.query(comando, [id]);
let info = resposta[0];

return info.affectedRows

}

