// ── CLASSES DATA ─────────────────────────────────────────────────────────────
const CLASSES = [
  {
    id: 'bruxo', nome: 'Bruxo', personagem: 'Tiago Doido', icon: '🔮', cor: '#5b21b6',
    folder: 'Bruxo-Tiago Doido ✓', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Bruxo/Bruxo THIAGO-DOIDO.png',
      poderImg: 'Herois/Bruxo/Bruxo Poder Heroico.png',
      poderNome: 'Poder Heroico do Bruxo',
      cartasGeradas: [] // sem cartas geradas pelo poder
    },
    cartas: [
      '0 marcos na pose.png','1 amor homoafetivo.png','1 guilherme das tattoo.png',
      '1 Henrique possuído.png','1 incendiar.png','1 Mauryvan quase-estudante.jpeg',
      '1 Messias encosto.jpeg','1 paulin espectral.png','1 Preparação pro ritual.png',
      '1 ritualzin.png','1 Sem tempo irmão.png','1 suicidio.png','1 The roof boys.png',
      '2 abismado.png','2 Marcos Nonato.jpeg','2 Mayk Corno.png','2 Sombra cachaceira.png',
      '2 Weide pensante.png','2_Weide_Estudante.jpeg','3 Jao Demonin.png',
      '3 livrin do capeta.png','3 marcos invocador.png','4 Anel do maal.png',
      '4 Canivete Caveirado.png','4 Desfigurar.png','4 La malicia.png','4 marcos satanista.png',
      '5 Demonayk.png','5 Henrique nervouser.png','5 pão de 20.png',
      '6 Estrangulamento sombrio.png','6 Marcos devoto.png','7 Lorde Marcos.png',
      '7 Mayk aneymonas.png','7 Paulin demonio.png','8 Ritualzao.png'
    ],
    novaLeva: ['10_Bruxo-Anacleton.png']
  },
  {
    id: 'cacador', nome: 'Caçador', personagem: 'Mauryvan', icon: '🏹', cor: '#166534',
    folder: 'Caçador-Mauryvan', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Caçador/Caçador Mauryvan.png',
      poderImg: 'Herois/Caçador/Caçador Poder Heroico.png',
      poderNome: 'Poder Heroico do Caçador',
      cartasGeradas: [] // sem cartas geradas
    },
    cartas: [
      '1 Busca Implacável.png','1 Calango.jpeg','1 Henriques calling.png','1 mary.png','1 Thor.png',
      '2 cabeça de gelo.jpeg','2 Descoberta aterradora.png','2 dog.png','2 fi do henrique.jpeg',
      '2 Henrique lavando a moto.png','2 Lobbo raivoso.png','2 Marca do macaqueado.png',
      '2 Vareta aminal.png','3 Autista Bixeiro.png','3 chamado do mayk cachorro.png',
      '3 criatura nefasta.jpeg','3 Cuei motoboy.png','3 Guardião dos aminal.png',
      '3 Henrique calangueiro.jpeg','3 Luiz Intimidante.png','3 pneu cyberpunk.png',
      '4 guilherme dos dog.png','5 cuei mimindo no onibus.png','5 Dexter.jpeg',
      '5 Scwharzeneguer, o papagaio do congo.png','6 Rolemã de mecânico.png',
      '6 Weide demonio feral.jpeg','8 joão galo free-fire.png'
    ],
    novaLeva: [
      '1_Alvorada-no-Borges-Landeiro.png','1_Bom-Garoto.png','1_Galpão-Abandonado.png',
      '1_Picada-de-Mosquito.png','2_A-Faca-e-a-Bufa.png','2_Aminal-Handling.png',
      '2_Como-é,-amigo.png','2_Ficou-na-Reserva.png','2_Indo-ali.png',
      '2_Marcos-domador-de-Rato.png','2_Operação-Borges-Landeiro.png','2_Pescando-Cururus.png',
      '2_Vai-ter-que-ginchar.png','3_Dedo-no-cu-e-gritaria.png','3_Descascado-no-chat-do-lol.png',
      '3_Headset-Descascado.png','3_Soltem-os-cães.png','4_Faquinha-Secreta.png',
      '4_Weide-Equitador.png','5_Cavalo-do-Solar-Ville.png','5_Fogo-nas-canela.png',
      '6_O-Berrador.png','7_Guariba-da-Savana.png','9_Sharkinha.png',
      'TOKEN 1_Sapo-Cururu.png','TOKEN 1_Totó-do-Mal.png'
    ]
  },
  {
    id: 'druida', nome: 'Druída', personagem: 'Paulin', icon: '🌿', cor: '#14532d',
    folder: 'Druída-Paulin', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Druida/Druída Paulin.png',
      poderImg: 'Herois/Druida/Druída Poder Heróico.png',
      poderNome: 'Poder Heroico do Druída',
      cartasGeradas: []
    },
    cartas: [
      '0 Yanne.png','1 Miojin do capeta.png','1 weide morfeu.png','2 Achados na selva.png',
      '2 La gula.png','2 Macaqueamento.png','2 Rafinha torto.png','2 Uniforme do AEE.png',
      '3 autista tempero de bibiu.jpeg','3 bolo.jpg','3 salada mista.png','4 La fartura.png',
      '4 Monkulele.png','4 patrick satisfeito.png','4 Ya(n)ne.png','5 Messiasona.png',
      '6 Perdidos na selva.png','6 Preparação do acampamento.png','6_Henrique_faminto.png',
      '8 Weide kench.png','9 Ryan Provocante.png','10 Patrick no bain.png'
    ],
    novaLeva: ['Mela-de-Roupão(16-1-2026-16_8).png']
  },
  {
    id: 'guerreiro', nome: 'Guerreiro', personagem: 'Weide', icon: '⚔️', cor: '#c0000a',
    folder: 'Guerreiro-Weide', novaLevaFolder: 'NOVA LEVA',
    heroi: {
      img: 'Herois/Guerreiro/Guerreiro - Weide.png',
      poderImg: 'Herois/Guerreiro/Guerreiro Poder Heroico.png',
      poderNome: 'Poder Heroico do Guerreiro',
      cartasGeradas: []
    },
    cartas: [
      '0 Espada de plástico.png','1 Fio do treino.png','1 jao sem shape.png','1 Lukinha.png',
      '1 Mayk combatente.png','1 messias introzado.jpg','1 Upgrade do teta irmao.png',
      '2 Marreta fo da.png','2 me and the boys.png','3 autista uma calda.png','3 duelo.png',
      '3 Escudo de rolimã.png','3 Jao helping hand.png','3 mauryvan escudeiro.jpeg',
      '4 Jao surfistinha.png','4 nic chan.jpeg','4 Tranqueira do teta.png',
      '5 messias lutador.png','8 autista t-pose.png','8 Ociones.png','8_Messias_samurai.png',
      '9 Coneman, o Provocante.png'
    ],
    novaLeva: [
      '1_Calça_Apertadinha.png','1_Mostra_os_Dente.png','1_Smart_Fit.png',
      '1_Weide-Inchado.png','1_Weideverso.png','2_Paulin_Malhando.png',
      '2_Rafinha_Provocante.png','2_Tapão_na_Bunda.png','2_Treino_Boys.png',
      '3_Jao_Piscineiro.png',"5_Briga_feia_do_d'jabo.png",'5_Tapão_na_Bunda.png',
      '6_John_Desassistido.png','6_Thiaguinho.png'
    ]
  },
  {
    id: 'ladino', nome: 'Ladino', personagem: 'Rafinha', icon: '🗡️', cor: '#1c1917',
    folder: 'Ladino-Rafinha', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Ladino/Ladinho Rafinha.png',
      poderImg: 'Herois/Ladino/Ladino Poder Heroico.png',
      poderNome: 'Poder Heroico do Ladino',
      // O poder do Ladino gera a carta "2 Pistola Ladino"
      cartasGeradas: [
        { file: '2 Pistola Ladino.png', pasta: 'Herois/Ladino/', nome: '2 Pistola Ladino' }
      ]
    },
    cartas: [
      '1 Marcos coronga.png','1 Truco valendo o toba.png','2 dança macaqueante.png',
      '2_La_trap.png','2 mandados embora.jpeg','2 Marcos Chave marola.png','2 Miuriroubo.png',
      '2 Passa o radin.png','2_Plataforma_do_eixo.png','2 Sarrada misteriosa.png',
      '2 thiefaguinho.png','3 Jao Dançarino.png','3 Messias à espreita.png',
      '3 messias dançante.png','3_nicolas_coronga.jpeg','3 Não tão pirigoso.png',
      '3 sequestro do hamud.jpeg',"4 Tetano's blade.png",'5 Foco.png','5 Payk.png',
      '5_ze_coringa.png','6 Final de role.png','7 Tiago Doido Coronga.png',
      '7 Voz de assalto.png','7 weide tendencioso.png','8 Zé Coronga.png'
    ],
    novaLeva: [
      '1_Passamos_na_UFG.png','4_Lemuel_Safadinho.png','4_Vai_Thiomanocu.png','6_O-Gritinha.png'
    ]
  },
  {
    id: 'mago', nome: 'Mago', personagem: 'Takis', icon: '✨', cor: '#1e3a8a',
    folder: 'Mago-Takis', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Mago/Mago Takis.png',
      poderImg: 'Herois/Mago/Mago Poder Heroico.png',
      poderNome: 'Poder Heroico do Mago',
      cartasGeradas: []
    },
    cartas: [
      '1 Conchinha.png','1 Enquadrar.png','1 misseis de bombril.png','1 Saco do ryan.png',
      '2 la incomodancia.jpeg','2 Sem saco pra dormir.png','2_Marcos-Estudante.png',
      '2_Mayks_Street.png','3 Anem mano...png','3 Concentração perpétua.jpeg',
      '3 Duplicar.jpeg','3 Guilherme estudante.png','3 imagem amaldiçoada.jpeg',
      '3 Implorar.png','3 Jao Jaqueiro.png','3 marcos pedreiro.png','3 Mayk Estatua.png',
      '3 muro.png','3 prazer na desgraça.jpeg','3_Habitat-Natural.png','4 Mangueirada.png',
      '4 Mayk Barbado.jpeg','4_Lukeny-Cheira-Pau.png','4_Praca_civica.png',
      '6 Com tempo irmão.png','6 Pedrada.png','8 Pagando de mayk.png','10 Mayk Macaqueador.png'
    ],
    novaLeva: [
      '1_Apulin.png','1_Falando_de_Genshin.png','1_Fonte-Azul.png','1_Lukeny-com-Insônia.png',
      '1_Weide-Inchado.png','1_Weideverso.png','2_Amigos-Distantes.png','2_Análise.png',
      '2_Mimiu.png','2_Takis-Equipado.png','3_Eu-to-Bem-Tranquilo.png','3_Lumei.png',
      '3_Punição-pela-Mangueira.png','3_Sessao-de-RPG.png','3_Soninho-pós-role.png',
      '4_Polimorfia.png','4_Teta_Inspirado.png','7_Incêndio-na-Tetolândia.png',
      '8_Messy-Potter.png','10_Alagamento-Azul.png'
    ]
  },
  {
    id: 'paladino', nome: 'Paladino', personagem: 'John', icon: '🛡️', cor: '#92400e',
    folder: 'Paladino John', novaLevaFolder: 'Nova leva',
    heroi: {
      img: 'Herois/Paladino/Paladino John The Boss.png',
      poderImg: 'Herois/Paladino/Paladino Poder Heroico.png',
      poderNome: 'Poder Heroico do Paladino',
      // Paladino tem uma carta extra: John-Brother
      cartasGeradas: [
        { file: 'John-Brother(23-9-2025-16_32).png', pasta: 'Herois/Paladino/', nome: 'John Brother' }
      ]
    },
    cartas: [
      '1_Marcos_reu_primario.png','1_Raldin.png','1_Sacrificio_do_inocente.png',
      '1_Teta_em_foco.png','1_weides_calling.png','4_Enquadramento_Divinho.png',
      '4_La_Locura.png','4_nao_vai_subir_ninguem.png','5_Pipa.png','6_Lorde_Marcos.png',
      '8_Aumentar.png','8_Vuei.png'
    ],
    novaLeva: [
      '1_Brotherhood-Forever24-11-2025-23_47.png','1_Calibrando.png','1_Cassetete.png',
      '1_Cracha-Campuseiro24-11-2025-12_8.png','1_Enquadrado.png','1_Humildade.png',
      '1_Pego-no-Flagra.png','1_Puts-deu-Tela-Azul24-11-2025-12_26.png',
      '2_Equilibrio-de-Forcas26-11-2025-12_31.png','2_Sinal-Sagrado26-11-2025-12_42.png',
      '2_Vai-tomar-Porradao24-11-2025-12_43.png','2_Weide-Escudeiro.png',
      '3_Apresentacao-de-Escola-Cringe.png','3_Barra-de-Supino.png',
      '3_Cupom-Inexplicavel.png','3_Jogada-Planejada.png','4_Mousepad-Biblico.png',
      '5_Chapado-de-Fe.png','5_Mestre-Pai-Nene.png','6_Setup-Novo27-11-2025-8_25.png',
      '7_O-Chefe.png'
    ]
  },
  {
    id: 'sacerdote', nome: 'Sacerdote', personagem: 'Lukinha', icon: '⛪', cor: '#881337',
    folder: 'Sacerdote-Lukinha', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Sacerdote/Sacerdote Lukinha.png',
      poderImg: 'Herois/Sacerdote/Sacerdote Poder Heroico.png',
      poderNome: 'Poder Heroico do Sacerdote',
      // O poder do Sacerdote gera "Corte do Pica Pau"
      cartasGeradas: [
        { file: '2_Poder Heroico Corte do Pica Pau.png', pasta: 'Cartinhas/Sacerdote-Lukinha/Nova Leva/', nome: 'Corte do Pica Pau' }
      ]
    },
    cartas: [
      '0_Copin_de_me_azul.jpeg','0_Copin_de_me_vermelho.jpeg','0_Feijoada.png',
      '0_paroirmao.png','1_Maozinha.png','1_paz_interior.png','2_Boate_Pulsar.png',
      '2_Cuei_na_naiti.png','2_Morfinha.png','3_Criacao.png','3_Henrique_Espectro.png',
      '4_Espectro_Sarrador.png','4_Ryan_Espectro.png','5_Henrique_esfarelado.png',
      '5_O_messias.png','6_Weide_hipnotizado.png','7_Arimateia.png','7_El_hombre_careca.png',
      '8_Old_school_boys.png','8_Thalyne_Alada.png','9_Controlar_o_tchola.png'
    ],
    novaLeva: [
      '1_Deve-ser-tão-bunitin.png','1_Messias-Farmando-Aura.png','1_Passa-pasta-que-sa.png',
      '1_Rafinha-Anjo.png','1_Tou-de-Boas.png','2_Conforto-Mortal.png',
      '2_Corte-do-Pica-pau.png','2_Deformidade.png','2_Lugar-Errado.png',
      '2_Mudando-o-Mindset.png','2_Poder Heroico Corte do Pica Pau.png','2_To-de-Atestado.png',
      '2_Weide-Papai.png','3_Oração-dos-Felinha.png','3_Weide-Obscuro.png',
      '4_Cururu-Emo.png','4_Ladrilho-Nazista.png','4_Massagem-Gratuita.png',
      '7_O-filho-do-Messias.png'
    ]
  },
  {
    id: 'xama', nome: 'Xamã', personagem: 'Alanys', icon: '🌀', cor: '#0e4f4f',
    folder: 'xama-Alanys', novaLevaFolder: 'Nova Leva',
    heroi: {
      img: 'Herois/Xama/Xama Alanys.png',
      poderImg: 'Herois/Xama/Xama Poder Heroico.png',
      poderNome: 'Poder Heroico do Xamã',
      // O poder do Xamã gera 3 Totens + Tico (animal de estimação)
      cartasGeradas: [
        { file: '1 Totem Amy.png',    pasta: 'Herois/Xama/', nome: 'Totem Amy' },
        { file: '1 Totem João.png',   pasta: 'Herois/Xama/', nome: 'Totem João' },
        { file: '1 Totem Miguel.png', pasta: 'Herois/Xama/', nome: 'Totem Miguel' },
        { file: 'Tico(23-9-2025-14_16).png', pasta: 'Herois/Xama/', nome: 'Tico' }
      ]
    },
    cartas: [
      '0_alvarenga_no_salao.jpeg','1_Anti-depressivo.png','1_Bebida_ralda.png',
      '1_Coleira_furry.png','1_Kalinda.png','1_Maykcare.png','1_Muie_na_net.png',
      '1_Orelinha_de_furry.png','1_teta_muie.jpeg','2_Asinha-do-Weide24-11-2025-11_54.png',
      '2_Limpa_piscina.png','2_lucas_perfeito_muie.jpeg','2_miurin_muie.jpeg',
      '2_muie_ralda.jpeg','2_Planejamento_do_capeta.png','2_Rabin_de_enfia_no_cu.jpeg',
      '2_Rabin_de_Furry.png','2_Tecta_muie.png','3_Beco_da_pulsar.png','3_conegirl.png',
      '3_e_muie.jpg','3_Henrique_muie.png','3_mauryvan_muie.jpeg','3_Muiessias.png',
      '4_gui_stora_cu.png','4_lukinha_muie.jpeg','4_paulao_pancadao.jpeg',
      '4_paulin_muie.jpeg','4_Teta.png','5_Autista_muie.png','5_Kalinda_em_foco.png',
      '5_Kalindas_house.png','6_aGUIota.png','6_paulo.png','8_Kahbeba.png','11_Weidividado.png'
    ],
    novaLeva: ['1_Ai-eu-virei-e-falei.png','1_Amor-Proibido.png','6_Horny-Takis.png']
  },
  {
    id: 'comuns', nome: 'Comuns', personagem: 'Cartas Comuns', icon: '🃏', cor: '#374151',
    folder: 'Comuns', novaLevaFolder: 'Nova Leva',
    heroi: null, // sem herói para comuns
    cartas: [
      '0_A_MOEDA.png','0_Canequin_de_cerveja.png','0_pedaco_de_bolo.jpeg',
      '1-Nicolas_coronga.png','1_Abacaxi.png','1_autista_bolado.jpeg','1_Cuei_Cervejeiro.png',
      '1_Kalinda_destruidora_de_weides.png','1_Mayk.png','1_Messias_Ze_Droguinha.png',
      '1_Noia.png','1_Rafinha_pensativo.png','1_Rustoff_de_limao.jpeg','1_Vintage_boys.png',
      '1_weide.png','1_weide_alimentador.jpeg','1_weide_dog.png','1_weide_sarrador.jpeg',
      '2_mayk_zap.png','2_melao.png','2_messias_de_byke.png','2_Pedro_paulo_hackerman.png',
      '2_Teta_querendo_ir_embora.png','2_Viviane_armada.png','3_Arthur_pre_cambriano.png',
      '3_autista_cyberpunk_furtivo.jpeg','3_Cuei_happy_drinker.png','3_Jao_Armado.png',
      '3_melancia.png','3_Messias_alcoholics.png','3_Messias_Brilhante.png',
      '3_Messias_Espectro.png','3_patrick.jpeg','3_patrick_insatisfeito.png',
      '3_Tecnico_de_rafinhagem.png','3_ze_coringa.png','4_autista_cyberpunk.jpeg',
      '4_Gui.png','4_Kalinda_Preguiça.png','4_Mauryvan_Sedutor.png','4_Mayk_carente.png',
      '4_O_eide.png','4_Rafinha.png','4_Ratin_vinheiro.png','4_Weide_Massagista.png',
      '4_Weidevan_introzado.png','5_henrique_mumia.png','5_Henrique_rosa.png','5_Nerfakali.png',
      '6_azulzinha.jpeg','6_Ecoesport_do_messias.jpeg','6_Je_suis_weide.png',
      '6_Mayk_garoto_propaganda.png','6_Messias_morsa.png','7_Daniel-san.png',
      '7_geraldo_ciclista.png','8_Godyr.png','8_Mayk_on_point.png','8_The_Neon_Boyz.png',
      '8_Tratorfinha.png','9_Jao_Espectro.png','Lemel.png'
    ],
    novaLeva: [
      '1_Detector-de-Nerds.png','1_Gui.png','2_Messias-Apache.png','2_Miurin-Anti-raldo.png',
      '2_Teta-de-Segredinho.png','3_Gatin-Entrosado.png','3_Paulin-Gargula.png',
      '4_O-Caçador-de-Nerds.png','7_Rafinha-Fantasiado.png','9_Maroto-Mestre.png'
    ]
  }
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

function getCost(file) {
  const token = file.match(/^TOKEN\s+(\d+)[_ ]/i);
  if (token) return token[1];
  const m = file.match(/^(\d+)[_ ]/);
  return m ? m[1] : '';
}

function getCardName(file) {
  let n = file.replace(/\.(png|jpe?g|jpg)$/i, '');
  n = n.replace(/^TOKEN\s+\d+[_ ]/i, '');
  n = n.replace(/^\d+[-_ ]/, '');
  n = n.replace(/\d{1,2}-\d{1,2}-\d{4}(?:-\d+[_]\d+)?$/, '').trim();
  n = n.replace(/\(\d{1,2}-\d{1,2}-\d{4}(?:-\d+[_]\d+)?\)$/, '').trim();
  n = n.replace(/_/g, ' ').trim();
  return n;
}

function buildPath(folder, sub, file) {
  if (sub) return 'Cartinhas/' + folder + '/' + sub + '/' + file;
  return 'Cartinhas/' + folder + '/' + file;
}

function escAttr(s) {
  return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────

function openLightbox(src, name) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxName').textContent = name;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightboxImg').src = '';
  document.body.style.overflow = '';
}

function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
}
