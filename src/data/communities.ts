// ============================================================
//  COMMUNITIES — src/data/communities.ts
//  Add/edit parish communities here.
//  Each entry shows a tab on the Comunidades page.
// ============================================================

export interface CommunityCoordinator {
  name:      string
  phone:     string
  whatsapp?: string            // number with country code, e.g. '5531999999999'
}

export interface Community {
  id:           string
  name:         string
  history:      string         // full text, can include \n for paragraphs
  coordinators: CommunityCoordinator[]
  address:      string         // human-readable address
  mapsEmbed?:   string         // Google Maps iframe src URL
  mapsLink?:    string         // Google Maps link
  photo?:       string         // path relative to /public
}

export const communities: Community[] = [
  {
    id:      'nossa-senhora-aparecida',
    name:    'Comunidade Nossa Senhora Aparecida',
    photo:   '/images/comunidades/nossa-senhora-aparecida.jpg',
    address: 'Rua Caetés, 455 — Iguaçu, Ipatinga/MG — CEP 35.162-038',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Caeté,455,Iguaçu,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Caet%C3%A9s,455,Igua%C3%A7u,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Carlos Alberto Marques', phone: '' },
    ],
    history: 'A Comunidade Nossa Senhora Aparecida tem sua história profundamente ligada à própria criação da Paróquia Nossa Senhora Aparecida, sendo fruto do crescimento da fé e da organização pastoral na região. Inicialmente pertencente à Paróquia Cristo Rei, a comunidade foi se fortalecendo por meio da participação ativa dos fiéis, até alcançar maturidade suficiente para sua emancipação paroquial.\n\nCom o aumento da população e das atividades religiosas, tornou-se necessária uma estrutura própria que atendesse melhor às demandas espirituais e pastorais. Assim, a paróquia foi criada em 1º de janeiro de 1991 quando se desmembrou da Paróquia Cristo Rei, com o objetivo de ampliar a ação evangelizadora e aproximar ainda mais a Igreja do povo. Esse processo reflete uma dinâmica comum na Igreja, onde comunidades vivas e atuantes dão origem a novas paróquias, fortalecendo a missão evangelizadora.\n\nAo longo de sua caminhada, a Comunidade Nossa Senhora Aparecida tem buscado constantemente melhorar sua estrutura física e pastoral. Entre as iniciativas, destacam-se projetos como a reforma da sacristia, a construção de uma nova capela e melhorias na Igreja Matriz, sempre com o envolvimento e a colaboração dos fiéis.\n\nAssim, a história da comunidade se constrói dia após dia, sustentada pela fé, pelo trabalho conjunto e pela devoção a Nossa Senhora Aparecida, sinal de esperança e unidade para todo o povo de Deus.',
  },
  {
    id:      'divina-providencia',
    name:    'Comunidade Divina Providência',
    photo:   '/images/comunidades/divina-providencia.png',
    address: 'Rua Tupiniquins, 95 — Iguaçu, Ipatinga/MG — CEP 35.162-138',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Tupiniquins,95,Iguaçu,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Tupiniquins,95,Igua%C3%A7u,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Jaqueline Celestina de Freitas Moreira', phone: '' },
    ],
    history: 'A Comunidade Divina Providência, situada nas dependências do Lar dos Idosos São Vicente de Paula, nasceu de forma simples e profundamente solidária, refletindo o cuidado com a vida e a dignidade dos mais idosos. Seus primeiros momentos aconteceram no espaço do refeitório do lar, onde foi organizada uma pequena capela para as celebrações. Desde o início, a comunidade contou com o apoio essencial dos Vicentinos, cuja missão caritativa está em sintonia com o espírito do Evangelho e com o cuidado aos mais necessitados.\n\nPor estar inserida dentro da estrutura do lar, a comunidade segue normas próprias de convivência e funcionamento, prezando pelo respeito e pela harmonia com os residentes. Assim, as atividades são realizadas até as 21h, evitando ruídos excessivos, e qualquer obra ou melhoria depende da autorização da diretoria do Lar Divina Providência.\n\nA espiritualidade da comunidade encontra inspiração na devoção a Nossa Senhora da Divina Providência, cuja origem remonta à tradição cristã desde o século XII, ligada à confiança na ação de Deus que nunca abandona seus filhos. Esse título mariano está associado à intercessão de Maria nas Bodas de Caná, quando, atenta às necessidades dos noivos, pediu a Jesus que realizasse o milagre da transformação da água em vinho, revelando o cuidado providente de Deus na vida das pessoas.\n\nAssim, a Comunidade Divina Providência constrói sua caminhada inspirada nessa confiança: mesmo com limitações estruturais, mantém viva a fé, a solidariedade e o serviço.',
  },
  {
    id:      'nossa-senhora-esperanca',
    name:    'Comunidade Nossa Senhora da Esperança',
    photo:   '/images/comunidades/nossa-senhora-esperanca.png',
    address: 'Rua Rio Amazonas, 455 — Ferroviários, Ipatinga/MG — CEP 35.162-001',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Rio+Amazonas,455,Ferroviários,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Rio+Amazonas,455,Ferroviari%C3%B3s,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Ezio da Silva Cardoso', phone: '' },
    ],
    history: 'A Comunidade Nossa Senhora da Esperança, que antes se chamava Comunidade Esperança em Cristo, tem sua origem marcada pela simplicidade, fé e perseverança, refletindo a devoção a Nossa Senhora da Esperança, que simboliza a confiança em Deus mesmo diante das incertezas.\n\nSeu início remonta à década de 1980, no recém-criado Bairro Ferroviários, fundado pela CVRD, onde havia cerca de vinte e cinco residências. Nesse contexto, o Padre Ernesto celebrava missas em praças e garagens, reunindo os primeiros fiéis. O senhor José Urias, conhecido como Tio Zé, teve papel fundamental ao ministrar catequese às crianças em seu quintal e alimentar o sonho da construção de uma igreja.\n\nNa década de 1990, esse sonho começou a se concretizar com a doação do lote pela CVRD. Em setembro de 1997, o projeto de construção foi aprovado pela prefeitura e, com o esforço coletivo dos fiéis, o templo foi erguido, sendo celebrada a primeira missa pelos padres José Miranda e Geraldo Ildeu.\n\nCom o desmembramento da Paróquia Cristo Rei, a comunidade passou a integrar a Paróquia Nossa Senhora Aparecida. Em 2022, o Padre Alex presenteou a comunidade com a imagem de Nossa Senhora da Esperança, e a oficialização ocorreu em 23 de abril de 2025, culminando na realização do primeiro tríduo e festa.\n\nHoje, a comunidade segue sua missão com fé e esperança, buscando fortalecer a participação dos fiéis, ampliar o número de dizimistas e desenvolver novas pastorais.',
  },
  {
    id:      'sao-jose',
    name:    'Comunidade São José',
    photo:   '/images/comunidades/sao-jose.png',
    address: 'Rua Aruaque, 35 — Iguaçu, Ipatinga/MG — CEP 35.162-089',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Aruaque,35,Iguaçu,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Aruaque,35,Igua%C3%A7u,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Viviane Miranda Bonifácio', phone: '' },
    ],
    history: 'A Comunidade São José, anteriormente chamada Comunidade Jesus de Nazaré, nasceu a partir de uma simples novena de Natal, quando, por sugestão do Padre Ernesto, foi criado um grupo de reflexão. A partir desse momento, iniciaram-se celebrações de missa nas ruas do bairro, realizadas uma a duas vezes por mês, fortalecendo a fé e a união dos fiéis.\n\nCom o crescimento da comunidade, surgiu a necessidade de um espaço próprio. Após muita luta, conseguiram junto à Prefeitura de Ipatinga o terreno onde hoje está a igreja. Embora a autorização fosse para um Centro Comunitário, os fiéis, com coragem e determinação, construíram uma igreja de madeira, sinal da presença de Deus no meio do povo.\n\nPadre Ernesto destacou a importância da continuidade da missão, confiando à Fátima essa responsabilidade. Ela, por sua vez, encontrou em Elias, hoje Diácono da Paróquia, alguém disposto a dar seguimento a esse trabalho.\n\nInspirada em São José, exemplo de fé e dedicação, a comunidade segue firme em sua missão, sustentada pela união, pelo serviço e pela confiança em Deus.',
  },
  {
    id:      'sao-joao-xxiii',
    name:    'Comunidade São João XXIII',
    photo:   '/images/comunidades/sao-joao-xxiii.jpeg',
    address: 'Rua Águas Marinhas, 240 — Iguaçu, Ipatinga/MG — CEP 35.162-014',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Águas+Marinhas,240,Iguaçu,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+%C3%81guas+Marinhas,240,Igua%C3%A7u,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Waldecy Ramos Lira', phone: '' },
    ],
    history: 'A Comunidade São João XXIII, localizada no bairro Iguaçu, foi fundada em 1º de março de 2011, nascendo do desejo de evangelizar e acolher, especialmente os idosos que encontravam dificuldades para participar das celebrações na Matriz.\n\nSeus primeiros encontros aconteceram na Rua Mármore, nº 135, na garagem da senhora Luciana, que, com generosidade, abriu as portas de sua casa. Ao lado de vizinhos como Jozina, Dona Petrina, Luciana Tanze, Dinha, entre outros, iniciaram-se os primeiros momentos de oração e convivência comunitária.\n\nNaquele tempo, a Capela do Santíssimo funcionava na Rua Esmeralda, nº 371, em um apartamento cedido por Dona Jalile, com a aprovação do então pároco, Padre José Geraldo da Silva Reis.\n\nCom o crescimento da comunidade e a chegada de novos membros, o grupo foi se fortalecendo. O nome "São João XXIII" foi escolhido, após votação, em homenagem ao Papa que convocou o Concílio Vaticano II, marco importante para a Igreja.\n\nA comunidade passou por alguns locais de encontro, reunindo-se inicialmente na residência do senhor José Maria e de Dona Edir, na Rua Esmeralda, e, posteriormente, na casa de Gilcilene (Gil), na Rua Diamante, onde permaneceu até julho de 2015.\n\nCom espírito de união e perseverança, surgiu o desejo de um espaço próprio. Assim, foi adquirido o lote onde hoje está construída a comunidade, por meio de empréstimo concedido pela Diocese de Itabira-Coronel Fabriciano, com o apoio do pároco Padre Aloísio Vieira.\n\nA sede própria, localizada na Rua Águas Marinhas, nº 240, foi inaugurada em 4 de julho de 2015, com uma Missa Festiva presidida por Dom Marco Aurélio, marcando um momento de grande alegria e conquista para todos.\n\nDurante a construção, muitas pessoas contribuíram com doações e trabalho voluntário, demonstrando o verdadeiro espírito de comunhão. Nesse período, a catequese aconteceu na casa de Dona Graça Canedo, que generosamente cedeu seu espaço.\n\nRecentemente, a comunidade concluiu as salas de catequese e continua promovendo campanhas para melhorar sua estrutura. Hoje, a Comunidade São João XXIII segue firme em sua missão evangelizadora, crescendo com a participação ativa dos fiéis, das pastorais, movimentos e serviços, sendo sinal vivo de fé, união e compromisso com o Reino de Deus.',
  },
  {
    id:      'santo-antonio',
    name:    'Comunidade Santo Antônio',
    photo:   '/images/comunidades/santo-antonio.jpeg',
    address: 'Rua Orlando Silva, 595 — Ideal, Ipatinga/MG — CEP 35.162-014',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Orlando+Silva,595,Ideal,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Orlando+Silva,595,Ideal,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Dulce Bueno Nunes', phone: '' },
    ],
    history: 'A Comunidade Santo Antônio, em Ipatinga/MG, tem sua história marcada pela fé, perseverança e espírito comunitário, inspirados no testemunho de Santo Antônio de Pádua, conhecido por sua profunda sabedoria, caridade e dedicação à evangelização.\n\nA história da comunidade teve início em agosto de 1982, quando ainda pertencia à Paróquia Cristo Rei, sob a condução do Pároco Pe. José Miranda e do Vigário Paroquial Pe. Franco. Nesse período, as missas e celebrações aconteciam de forma itinerante, geralmente em frente às residências dos membros mais atuantes.\n\nEm 13 de maio de 1985, surgiu a esperança de um espaço próprio, quando a Usiminas prometeu a cessão de um terreno em comodato. Entre 1985 e 1986, como alternativa, foi construído um galpão no quintal da casa do Sr. Geraldo Magela, na Rua Carlos Gomes, onde a comunidade permaneceu por um bom período, conseguindo formar uma reserva financeira.\n\nCom esforço próprio, os fiéis adquiriram uma casa na Rua Orlando Silva, nº 595, local onde até hoje funciona a igreja. Para a construção do templo, optaram por não receber recursos de empresas ou de políticos, realizando campanhas com carnês e contando com doações e trabalho voluntário. A escolha do nome \'Comunidade Santo Antônio\' ocorreu por votação, expressando a devoção popular ao santo.',
  },
  {
    id:      'atos-dos-apostolos',
    name:    'Comunidade Atos dos Apóstolos',
    photo:   '/images/comunidades/atos-dos-apostolos.png',
    address: 'Rua Manoel Izídio, 1174 — Ideal, Ipatinga/MG — CEP 35.162-200',
    mapsLink:  'https://www.google.com/maps/search/?api=1&query=Rua+Manoel+Izídio,1174,Ideal,Ipatinga,MG',
    mapsEmbed: 'https://maps.google.com/maps?q=Rua+Manoel+Iz%C3%ADdio,1174,Ideal,Ipatinga,MG&output=embed',
    coordinators: [
      { name: 'Cleiton Marcos de Almeida', phone: '' },
    ],
    history: 'A Comunidade Atos dos Apóstolos, em Ipatinga/MG, nasceu do desejo sincero de vivenciar a fé em comunidade. Sua história teve início em 1992, na casa do Sr. Antônio e Dona Madalena, onde aconteciam encontros de estudo bíblico coordenados por Vinícius. Esses momentos de reflexão e oração fortaleceram os vínculos entre os participantes e despertaram o desejo de uma vivência comunitária mais estruturada. Posteriormente, passaram a contar com a celebração da Santa Missa, presidida pelo Pe. Ernesto, que incentivou a criação de uma nova comunidade.\n\nA primeira reunião financeira ocorreu em 08 de dezembro de 1993, quando o dízimo começou a ser arrecadado nas casas, demonstrando o compromisso e a corresponsabilidade dos fiéis. Em junho de 1994, aconteceu a primeira celebração em um galpão, ainda com estrutura simples, mas repleta de fé e esperança. A formalização da comunidade deu-se com o registro em cartório da ata, em 17 de abril de 1997.\n\nCom esforço e união, a comunidade adquiriu, em 1996, o terreno da Usiminas destinado à construção da igreja. Inicialmente vinculada à Paróquia Cristo Rei, passou a integrar a Paróquia Nossa Senhora Aparecida, criada em dezembro de 1999.\n\nAssim como narrado nos Atos dos Apóstolos, a comunidade segue sua caminhada sustentada pela fé, pela unidade e pela ação do Espírito Santo, sendo sinal vivo de uma Igreja que nasce, cresce e se fortalece na partilha e na missão.',
  },
]
