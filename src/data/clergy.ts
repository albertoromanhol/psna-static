// ============================================================
//  CLERGY — src/data/clergy.ts
//  Add/edit priests and deacons here.
//  Photos go in public/images/clergy/
// ============================================================

export interface ClegyMember {
  name:  string
  role:  string   // e.g. 'Pároco', 'Vigário', 'Diácono'
  photo: string   // path relative to /public, e.g. '/images/clergy/padre-marco.jpg'
  bio:   string
  email?: string
  phone?: string
}

export const clergy: ClegyMember[] = [
  {
    name:  'Pe. Marco José de Almeida',
    role:  'Pároco',
    photo: '/images/clero/pe-marco.png',
    bio:   'Padre Marco José de Almeida nasceu em Fortaleza (CE), em 13 de março de 1975, sendo ordenado sacerdote em 12 de novembro de 2011. É presbítero da Diocese de Itabira–Coronel Fabriciano e atualmente exerce o ministério como pároco da Paróquia Nossa Senhora Aparecida, em Ipatinga (MG). Ao longo de sua caminhada, atuou em diversas paróquias, além de missão na Prelazia do Marajó (PA) e funções pastorais e sociais relevantes na diocese. Também é assessor da Pastoral da Juventude, membro da Cáritas Diocesana e da Comissão de Meio Ambiente da Província Eclesiástica de Mariana. Destaca-se pelo trabalho pastoral, missionário e compromisso com ações sociais e evangelização.',
  },
  {
    name:  'Pe. Nivaldo de Souza Aranda',
    role:  'Vigário Paroquial',
    photo: '/images/clero/pe-nivaldo.png',
    bio:   'Padre Nivaldo de Souza Aranda nasceu em Ferros (MG), em 21 de novembro de 1978, e foi ordenado sacerdote em 17 de julho de 2010. Pertence ao clero da Diocese de Itabira–Coronel Fabriciano, onde exerce seu ministério presbiteral. Atualmente, é Vigário Paroquial da Paróquia Nossa Senhora Aparecida, em Ipatinga (MG). Sua trajetória é marcada pelo serviço pastoral e dedicação à evangelização nas comunidades onde atua.',
  },
  {
    name:  'Diác. Elias Pereira da Silva',
    role:  'Diácono Permanente',
    photo: '/images/clero/diacono-elias.png',
    bio:   'Diác. Elias Pereira da Silva nasceu em Ipatinga (MG), em 21 de outubro de 1978, sendo ordenado diácono permanente em 06 de agosto de 2016. Exerce seu ministério na Paróquia Nossa Senhora Aparecida, pertencente à Diocese de Itabira–Coronel Fabriciano. Atualmente, é assessor da Pastoral do Povo da Rua do Regional III e assessor espiritual do Conselho Central de Ipatinga da SSVP. Natural e atuante na própria comunidade, destaca-se pelo serviço à caridade e à evangelização. Foi homenageado pela Câmara Municipal de Ipatinga com a Medalha Jamil Selim de Sales por sua contribuição à sociedade.',
  },
]
