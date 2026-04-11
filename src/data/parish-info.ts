// ============================================================
//  PARISH INFO — src/data/parish-info.ts
//  Static text content: history, patron saint, CPP, CAEP, coat of arms.
//  Use \n\n to separate paragraphs.
// ============================================================

// ── Parish history ───────────────────────────────────────────
export const history = {
  title: 'História da Paróquia',
  text: `A Paróquia Nossa Senhora Aparecida, com sede no bairro Iguaçu, em Ipatinga, foi criada em 1º de janeiro de 1999, desmembrada da Paróquia Cristo Rei, por Dom Lelis Lara. Seu primeiro pároco foi o Pe. Luiz Carlos de Castro (Buião), juntamente com vigários paroquiais, reunindo inicialmente 29 comunidades. Em 2000, assumiu como pároco o Pe. José Miranda, que conduziu a paróquia até seu falecimento em 2006, sendo sucedido pelo Pe. José Geraldo da Silva Reis. Com o crescimento da cidade, ocorreram desmembramentos importantes: em 2004 surgiu a Paróquia São Geraldo; em 2009, as Paróquias São Pedro e Senhor do Bonfim, reduzindo o número de comunidades. Nos anos seguintes, a paróquia foi conduzida por diferentes párocos, entre eles o Pe. Aloizio Vieira e, posteriormente, o Pe. Alex Banza. Em 2023, assumiu como pároco o Padre Marco José de Almeida, com o Padre Nivaldo de Souza Aranda como vigário paroquial. Em 2024, foi implantado o Caixa Único Paroquial, fortalecendo a comunhão e a partilha, além da celebração do Jubileu de Prata, que marcou a história da paróquia. Já em 2025, destacaram-se melhorias estruturais e o fortalecimento de movimentos pastorais. Atualmente, a paróquia conta com sete comunidades nos bairros Iguaçu, Ferroviários e Ideal, mantendo viva sua missão evangelizadora. Ao longo de mais de 25 anos, segue firme no anúncio do Evangelho, confiando na proteção de Nossa Senhora Aparecida e na ação do Espírito Santo.`,
  // Optional: a list of milestones for a timeline component
  milestones: [
    { year: '1999', event: 'Criação da Paróquia Nossa Senhora Aparecida, desmembrada da Paróquia Cristo Rei, por Dom Lelis Lara. Primeiro pároco: Pe. Luiz Carlos de Castro (Buião).' },
    { year: '2000', event: 'Pe. José Miranda assume como pároco.' },
    { year: '2004', event: 'Primeira Visita Pastoral (Dom Odilon Guimarães Moreira). Desmembramento: criação da Paróquia São Geraldo.' },
    { year: '2006', event: 'Falecimento do Pe. José Miranda. Pe. José Geraldo da Silva Reis assume como administrador e pároco.' },
    { year: '2009', event: 'Criação das Paróquias São Pedro e Senhor do Bonfim, reordenamento territorial.' },
    { year: '2016', event: 'Ordenação do Diácono Elias Silva.' },
    { year: '2021', event: 'Pe. Alex Banza Ilunga assume como pároco.' },
    { year: '2023', event: 'Pe. Marco José de Almeida assume como pároco. Pe. Nivaldo de Souza Aranda como vigário paroquial.' },
    { year: '2024', event: "Implantação do Caixa Único Paroquial. Jubileu de Prata — 25 anos da paróquia (tema: 'Com Maria, jubilosos peregrinos da esperança')." },
    { year: '2025', event: 'Entronização da imagem fac-símile de Nossa Senhora Aparecida, presidida pelo Cardeal Emérito Dom Raymundo Damasceno (12 de fevereiro). Oficialização da Comunidade Nossa Senhora da Esperança (23 de abril).' },
  ],
  photo: '/images/historia-paroquia.jpg',
}

// ── Patron saint ─────────────────────────────────────────────
export const patronSaint = {
  title:       'Nossa Senhora Aparecida',
  feast:       '12 de outubro',
  subtitle:    'Padroeira do Brasil',
  description: `A devoção à Nossa Senhora Aparecida é uma das mais profundas expressões de fé do povo brasileiro. Sua história tem origem em 1717, quando três pescadores, no rio Paraíba do Sul, encontraram a imagem da Virgem Maria nas águas. Após o achado, a pesca tornou-se abundante, sinal acolhido como manifestação da graça de Deus por intercessão da Mãe de Jesus.

Desde então, a pequena imagem negra tornou-se sinal de esperança, especialmente para os mais simples e necessitados. Ao longo dos séculos, milhões de fiéis recorrem à sua intercessão, confiando suas dores e alegrias. Em Aparecida, o Santuário Nacional se tornou lugar de peregrinação e encontro com Deus, onde a fé se renova constantemente.

Nossa Senhora Aparecida nos conduz a Cristo, ensinando a viver a humildade, a confiança e o amor. Como Mãe, acolhe todos os seus filhos e intercede por cada um. Por essa forte devoção do povo e por ser a padroeira da Diocese de Itabira e Coronel Fabriciano, a Paróquia Nossa Senhora Aparecida recebeu seu nome, expressando a fé e a confiança dos paroquianos sob seu manto protetor.

Assim, somos convidados a renovar nossa fé e seguir firmes no Evangelho, certos de que Maria sempre nos conduz ao seu Filho, Jesus Cristo.`,
  novenaUrl:   '', // TODO: link to novena PDF or external page
  photo:       '/images/nossa-senhora.jpg',
}

// ── Coat of arms ─────────────────────────────────────────────
export const coatOfArms = {
  title: 'Brasão da Paróquia',
  image: '/images/brasao.png',
  intro: 'A análise do brasão da Paróquia Nossa Senhora Aparecida, em Ipatinga-MG, vai além de sua dimensão estética. Trata-se de uma rica expressão simbólica que comunica a fé, a identidade e o sentido de pertença da comunidade paroquial. Cada elemento presente no brasão foi concebido para transmitir valores espirituais profundos, unindo tradição, devoção e realidade local.',
  sections: [
    {
      heading: '1. O Formato Circular (Unidade e Eternidade)',
      text: 'O formato circular que envolve o brasão possui grande significado na tradição cristã. Por não ter começo nem fim, o círculo representa a perfeição e a eternidade de Deus. Além disso, simboliza a unidade do povo de Deus reunido em torno de um mesmo centro, delimitando um espaço sagrado no qual a comunidade se reconhece como Igreja viva.',
    },
    {
      heading: '2. A Imagem Central: Nossa Senhora Aparecida',
      text: 'No centro do brasão encontra-se a imagem de Nossa Senhora Aparecida, padroeira da paróquia, da Diocese de Itabira e Coronel Fabriciano e do Brasil, ocupando o lugar principal e indicando que Maria é o coração da vida comunitária. Sua representação remete à imagem encontrada no Rio Paraíba do Sul, carregando profunda história de fé. A tonalidade escura recorda sua humildade e sua proximidade com os mais simples, reforçando sua identificação com o povo brasileiro. As mãos postas expressam sua constante intercessão pelos fiéis. O manto azul simboliza o céu e a proteção divina, enquanto os detalhes em dourado revelam sua realeza, reconhecendo-a como Rainha do Céu e da Terra.',
    },
    {
      heading: '3. As Bandeiras no Manto (Fé e Identidade Nacional)',
      text: 'Sobre o manto, destacam-se elementos heráldicos como as bandeiras, especialmente a do Brasil e a do Vaticano. Esses símbolos expressam a união entre a fé católica e a identidade nacional, evidenciando Nossa Senhora Aparecida como padroeira do Brasil e sinal de comunhão com a Igreja universal.',
    },
    {
      heading: '4. A Coroa Imperial (Soberania e Devoção)',
      text: 'No topo da imagem, a coroa imperial reforça a dignidade e a soberania de Nossa Senhora. Ela recorda a coroação oficial da imagem em 1904, marco importante da devoção mariana no Brasil. Além disso, a coroa exerce função visual de destaque, conduzindo o olhar do observador ao ponto mais elevado do brasão, ressaltando a grandeza da Mãe de Deus.',
    },
    {
      heading: '5. A Tipografia e a Bordadura (Identidade e Tradição)',
      text: 'A bordadura em tom azul-marinho, juntamente com a tipografia utilizada, contribui para a harmonia e identidade visual do brasão. O azul, tradicionalmente associado à Virgem Maria, transmite serenidade, confiança e espiritualidade. A tipografia serifada remete à tradição, conferindo sobriedade e respeito ao conjunto. Já a inscrição com o nome da paróquia e a identificação "Ipatinga-MG" estabelece a ligação entre a devoção mariana e a realidade concreta da comunidade, evidenciando que ali se vive, de forma particular, a fé da Igreja.',
    },
    {
      heading: '6. Síntese do Conjunto (Harmonia e Espiritualidade)',
      text: 'De modo geral, o brasão apresenta equilíbrio e simetria, transmitindo uma sensação de paz e estabilidade. O contraste entre o azul profundo da borda e os elementos dourados cria um destaque visual que direciona o olhar imediatamente para a imagem central de Nossa Senhora Aparecida. Assim, antes mesmo da leitura das palavras, o fiel é conduzido à contemplação da padroeira, reconhecendo nela o centro da vida e da missão da paróquia.',
    },
  ],
}

// ── CPP ──────────────────────────────────────────────────────
export const cpp = {
  title:       'Conselho Pastoral Paroquial (CPP)',
  description: `O Conselho Pastoral Paroquial (CPP) é um organismo que auxilia o pároco no planejamento, na organização e na avaliação das ações evangelizadoras e pastorais da paróquia. É formado por representantes das pastorais, movimentos e comunidades, tendo como missão promover a unidade, discernir os desafios locais e colocar em prática as diretrizes da Igreja Diocesana.

Entre suas principais funções estão a elaboração do Plano Pastoral Paroquial, a partilha da responsabilidade na condução da vida pastoral e a colaboração nas decisões junto ao pároco. O CPP também atua na coordenação e articulação entre os diversos grupos, fortalecendo a comunhão e evitando divisões.

Além disso, realiza avaliações periódicas das atividades e projetos, garantindo que a evangelização responda às necessidades da comunidade. Como espaço de escuta e representatividade, reúne-se mensalmente para refletir e encaminhar as demandas da paróquia.`,
  members: [
    { name: 'Padre Marco José de Almeida', role: 'Pároco' },
    { name: 'Padre Nivaldo de Souza Aranda', role: 'Vigário Paroquial' },
    { name: 'Diác. Elias Pereira da Silva', role: 'Diácono' },
    { name: 'Cleiton Marcos de Almeida', role: 'Coordenador CPP, EPAP e da Com. Atos dos Apóstolos' },
    { name: 'Ézio da Silva Cardoso', role: 'Secretário CPP — Com. Nossa Senhora da Esperança' },
    { name: 'Antônio Alberto Moreira Pinto', role: 'Conselho para Assuntos Econômicos Paroquial — Com. Nossa Senhora Aparecida' },
    { name: 'Carlos Alberto Marques', role: 'Coordenador — Com. Nossa Senhora Aparecida' },
    { name: 'Dulce Bueno Nunes', role: 'Coordenadora — Com. Santo Antônio' },
    { name: 'Ezio da Silva Cardoso', role: 'Coordenador — Com. Nossa Senhora da Esperança' },
    { name: 'Jaqueline Celestina de Freitas Moreira', role: 'Coordenadora — Com. Divina Providência' },
    { name: 'Viviane Miranda Bonifácio', role: 'Coordenadora — Com. São José' },
    { name: 'Waldecy Ramos Lira', role: 'Coordenador — Com. São João XXIII' },
    { name: 'Brígida Maria Ribeiro', role: 'Pastoral da Pessoa Idosa — Com. Nossa Senhora Aparecida' },
    { name: 'Jordânia Cristina Santos Silva', role: 'Pastoral do Povo de Rua — Com. Nossa Senhora Aparecida' },
    { name: 'Júlia Rodrigues Estevanato Marques', role: 'Pastoral da Juventude — Com. Santo Antônio' },
    { name: 'Maria da Consolação Rezende', role: 'Pastoral Familiar — Com. Santo Antônio' },
    { name: 'Maria Helena Brito do Amaral', role: 'Pastoral do Batismo — Com. Nossa Senhora Aparecida' },
    { name: 'Maria Irene Leandro Santos', role: 'Pastoral da Comunicação (PASCOM) — Com. Divina Providência' },
    { name: 'Osmar Marciano Alves', role: 'Pastoral da Música — Com. Nossa Senhora Aparecida' },
    { name: 'Rejany Maria', role: 'Pastoral Catequética — Com. Atos dos Apóstolos' },
    { name: 'Rosilene das Graças', role: 'Pastoral da Liturgia — Com. Atos dos Apóstolos' },
    { name: 'Silvia Maria de Souza Silva', role: 'Pastoral do Dízimo — Com. Atos dos Apóstolos' },
    { name: 'Ana Maria Lacerda Ribeiro', role: 'Sociedade de São Vicente de Paulo — Com. Nossa Senhora Aparecida' },
    { name: 'Enilza Aparecida Fernandes', role: 'Ministério dos Acólitos e Coroinhas — Com. Nossa Senhora Aparecida' },
    { name: 'João Paulo', role: 'Grupo de Oração da Renovação Carismática (RCC) — Com. Nossa Senhora Aparecida' },
    { name: 'José Nunes do Amaral', role: 'Representante Paroquial no COPAR — Com. Nossa Senhora Aparecida' },
    { name: 'Maria da Consolação Rezende', role: 'Apostolado da Oração — Com. Nossa Senhora Aparecida' },
    { name: 'Rosilene Alves da Silva Dias', role: 'Movimentos de Carisma Mariano — Com. Nossa Senhora Aparecida' },
    { name: 'Sebastião Lameu Gonçalves', role: 'Grupo de Reflexão — Com. Santo Antônio' },
  ],
  contact: '', // TODO: contact for CPP
}

// ── CAEP ─────────────────────────────────────────────────────
export const caep = {
  title:       'Conselho para Assuntos Econômicos Paroquial (CAEP)',
  description: `O Conselho para Assuntos Econômicos Paroquial (CAEP) é um organismo consultivo previsto pelo Direito Canônico (Cân. 537), que auxilia o pároco na administração responsável, transparente e partilhada dos bens da paróquia. Sua missão é zelar pelos recursos materiais, garantindo que sejam bem utilizados em favor da evangelização e da comunidade.

Entre suas principais funções está a elaboração do orçamento anual, o acompanhamento das receitas — como dízimos e doações — e das despesas, além da prestação de contas periódica à diocese e aos fiéis. O CAEP também atua na gestão de obras e investimentos, planejando e acompanhando construções, reformas e manutenções do patrimônio paroquial.

Formado por leigos comprometidos, o CAEP não é um órgão de decisão pastoral, mas um importante instrumento de apoio administrativo, fundamentado na ética, na responsabilidade e no serviço à comunidade.`,
  members: [] as { name: string; role: string }[],
  memberGroups: [
    {
      groupTitle: 'Membros Efetivos',
      members: [
        { name: 'Padre Marco José de Almeida', role: 'Pároco da Paróquia Nossa Senhora Aparecida' },
        { name: 'Antônio Alberto Moreira Pinto', role: 'Coordenador do CAEP' },
        { name: 'Isabel Maria da Silva', role: 'Primeira Secretária do CAEP' },
        { name: 'Francisco José Sena Pinto', role: 'CAEC — Com. Santo Antônio' },
        { name: 'Glória Fernandes da Silva', role: 'Tesoureira — Com. Divina Providência' },
        { name: 'Maria José Bacelar Iwazawa', role: 'Coordenadora Patrimonial' },
        { name: 'Mírian César Romanhol Moreira', role: 'CAEC — Com. Nossa Senhora Aparecida' },
        { name: 'Natanael Guedes Soares', role: 'Tesoureiro — Com. Nossa Senhora da Esperança' },
        { name: 'Paulo Edson Mol Pinto', role: 'Tesoureiro — Com. São João XXIII' },
        { name: 'Randes Ricardo dos Santos', role: 'CAEC — Com. Atos dos Apóstolos' },
        { name: 'Raquel Domingos Finamore Bertodo', role: 'Tesoureira — Com. São José' },
      ],
    },
    {
      groupTitle: 'Assessores',
      members: [
        { name: 'Itamar de Oliveira', role: 'Tesoureiro — Com. Santo Antônio' },
        { name: 'Maria da Penha de Oliveira', role: 'Coordenadora de Materiais e Insumos / Tesoureira — Com. Atos dos Apóstolos' },
        { name: 'Paulo Roberto Malta', role: 'Tesoureiro — Com. Nossa Senhora Aparecida' },
        { name: 'Carlos Alberto Marques', role: 'Coordenador — Com. Nossa Senhora Aparecida' },
        { name: 'Cleiton Marcos de Almeida', role: 'Coordenador — Com. Atos dos Apóstolos e CPP' },
        { name: 'Dulce Bueno Nunes', role: 'Coordenadora — Com. Santo Antônio' },
        { name: 'Ezio da Silva Cardoso', role: 'Coordenador — Com. Nossa Senhora da Esperança' },
        { name: 'Jaqueline Celestina de Freitas Moreira', role: 'Coordenadora — Com. Divina Providência' },
        { name: 'Viviane Miranda Bonifácio', role: 'Coordenadora — Com. São José' },
        { name: 'Waldecy Ramos Lira', role: 'Coordenador — Com. São João XXIII' },
        { name: 'Silvia Maria de Souza Silva', role: 'Coordenadora da Pastoral do Dízimo' },
        { name: 'Padre Nivaldo de Souza Aranda', role: 'Vigário da Paróquia Nossa Senhora Aparecida' },
        { name: 'Diácono Elias Silva', role: 'Diácono da Paróquia Nossa Senhora Aparecida' },
        { name: 'Valéria Falcão Generoso de Oliveira', role: 'Assessora do Planejamento Financeiro' },
        { name: 'Iara da Fonseca Henriques', role: 'Assessora do Planejamento Financeiro' },
      ],
    },
  ],
  contact: '', // TODO: contact for CAEP
}

// ── Social / newsletter ──────────────────────────────────────
export const newsletters: { title: string; date: string; url: string }[] = [
  { title: 'Informativo Paroquial — Edição 01/2026', date: '2026-01', url: '/informativos/informativo-01-2026.pdf' },
  { title: 'Informativo Paroquial — Edição 02/2026', date: '2026-02', url: '/informativos/informativo-02-2026.pdf' },
  { title: 'Informativo Paroquial — Edição 03/2026', date: '2026-03', url: '/informativos/informativo-03-2026.pdf' },
  { title: 'Informativo Paroquial — Edição 04/2026', date: '2026-04', url: '/informativos/informativo-04-2026.pdf' },
]

// ── Liturgical links ─────────────────────────────────────────
export const liturgicalLinks = {
  description: 'Os Elos Litúrgicos são publicados mensalmente pela Diocese de Itabira–Coronel Fabriciano.',
  // Either a direct download URL or an external link to the Diocese site
  url: 'https://dioceseitabira.org.br/elo-liturgico/',
  pdfUrl: '', // TODO: or add a local PDF path like '/pdfs/elos-liturgicos.pdf'
}

// ── Google Calendar ──────────────────────────────────────────
export const calendarEmbedUrl = 'https://calendar.google.com/calendar/embed?src=67fd3c60b9aefad308c482d73ccd514e2606442d237fb3fb39f36a0372fb1b87%40group.calendar.google.com&ctz=America%2FSao_Paulo&hl=pt-BR&mode=AGENDA'
