// ============================================================
//  PASTORALS & MOVEMENTS — src/data/pastorals.ts
//  Edit descriptions and coordinator contacts here.
//  Each ministry can have multiple coordinators.
// ============================================================

export interface Coordinator {
  name:      string
  phone:     string
  whatsapp?: string
  email?:    string
}

export interface Ministry {
  id:           string
  name:         string
  description:  string
  coordinators: Coordinator[]
  photo?:       string  // optional image in /public/images/pastorais/
}

// ── Pastorais ────────────────────────────────────────────────
export const pastorals: Ministry[] = [
  {
    id:          'dizimo',
    name:        'Pastoral do Dízimo',
    description: 'A Pastoral do Dízimo é um serviço da Igreja Católica que tem como missão conscientizar os fiéis sobre a importância da partilha, da corresponsabilidade e do compromisso com a comunidade. Mais que uma contribuição financeira, o dízimo é um gesto de fé, gratidão e amor a Deus. Essa pastoral orienta os fiéis a colaborarem com a missão da Igreja, ajudando na manutenção do templo, nas ações evangelizadoras e nas obras de caridade, promovendo a comunhão, participação e missão.',
    coordinators: [
      { name: 'Silvia Maria de Souza Silva', phone: '' },
    ],
  },
  {
    id:          'liturgia',
    name:        'Pastoral da Liturgia',
    description: 'A Pastoral da Liturgia é responsável por animar, organizar e cuidar das celebrações da Igreja, para que sejam vivas, participativas e fiéis à tradição. Forma equipes, orienta leitores, salmistas e ministros, e zela pela beleza dos ritos. Seu objetivo é conduzir os fiéis a uma profunda experiência com Deus, celebrando com dignidade o mistério da fé.',
    coordinators: [
      { name: 'Rosilene das Graças', phone: '' },
    ],
  },
  {
    id:          'pascom',
    name:        'Pastoral da Comunicação (PASCOM)',
    description: 'A Pastoral da Comunicação (PASCOM) promove a evangelização por meio dos diversos meios de comunicação, integrando a comunidade e divulgando as ações da Igreja. Atua na produção de conteúdos, redes sociais, avisos e transmissões, sempre a serviço da verdade e da comunhão. Sua missão é comunicar com ética, criatividade e espírito missionário o Evangelho de Jesus Cristo.',
    coordinators: [
      { name: 'Maria Irene Leandro Santos', phone: '' },
    ],
  },
  {
    id:          'pessoa-idosa',
    name:        'Pastoral da Pessoa Idosa',
    description: 'A Pastoral da Pessoa Idosa é um serviço da Igreja que acompanha e valoriza os idosos, promovendo sua dignidade, saúde e integração na comunidade. Por meio de visitas domiciliares e ações solidárias, leva esperança, orientação e cuidado. Sua missão é defender a vida e garantir um envelhecimento ativo, digno e cheio de fé.',
    coordinators: [
      { name: 'Brígida Maria Ribeiro', phone: '' },
    ],
  },
  {
    id:          'povo-de-rua',
    name:        'Pastoral do Povo de Rua',
    description: 'A Pastoral do Povo de Rua é um serviço da Igreja que vai ao encontro das pessoas em situação de rua, promovendo acolhida, escuta e defesa de seus direitos. Inspirada no Evangelho, atua com presença solidária, levando esperança, dignidade e oportunidades de reintegração, testemunhando o amor de Deus junto aos mais vulneráveis.',
    coordinators: [
      { name: 'Jordânia Cristina Santos Silva', phone: '' },
    ],
  },
  {
    id:          'familiar',
    name:        'Pastoral Familiar',
    description: 'A Pastoral Familiar é um serviço da Igreja que acompanha, orienta e evangeliza as famílias em todas as fases da vida. Atua na preparação para o matrimônio, no apoio aos casais e na promoção dos valores cristãos no lar. Serve às famílias, ajudando-as a viver o amor, a fé e a missão, fortalecendo a vida familiar como Igreja doméstica.',
    coordinators: [
      { name: 'Maria da Consolação Rezende', phone: '' },
    ],
  },
  {
    id:          'acolhida',
    name:        'Pastoral da Acolhida',
    description: 'A Pastoral da Acolhida é um serviço da Igreja que recebe com alegria e atenção todos que chegam à comunidade. Atua na organização das celebrações, orientando e acolhendo fiéis e visitantes. Serve a toda a assembleia, promovendo um ambiente fraterno, inclusivo e evangelizador, onde cada pessoa se sinta amada e parte da Igreja.',
    coordinators: [
      { name: 'A definir', phone: '' },
    ],
  },
  {
    id:          'batismo',
    name:        'Pastoral do Batismo',
    description: 'A Pastoral do Batismo acolhe e prepara pais e padrinhos para o primeiro sacramento, promovendo encontros formativos sobre a fé e o compromisso cristão. Orienta sobre o sentido do batismo como vida nova em Cristo, acompanha as famílias e auxilia na celebração, incentivando a vivência comunitária e o crescimento na fé.',
    coordinators: [
      { name: 'Maria Helena Brito do Amaral', phone: '' },
    ],
  },
  {
    id:          'catequese',
    name:        'Pastoral Catequética',
    description: 'A Catequese é o processo de educação na fé que conduz ao encontro com Cristo e à vida na Igreja. Forma discípulos missionários, integrando Palavra, doutrina, sacramentos e comunidade. Inicia aos 6 anos e segue até a Crisma. Integra Palavra de Deus, doutrina, sacramentos e vida comunitária, acompanhando todas as idades no crescimento espiritual e na vivência cristã, em comunhão com a Igreja.',
    coordinators: [
      { name: 'Rejany Maria', phone: '' },
    ],
  },
  {
    id:          'ivca',
    name:        'Iniciação da Vida Cristã do Adulto (IVCA)',
    description: 'A Iniciação à Vida Cristã do Adulto (IVCA) é um caminho de fé que introduz o adulto no mistério de Cristo e na vida da Igreja. Por meio de etapas formativas, celebrações e sacramentos (Batismo, Eucaristia e Crisma), promove conversão, amadurecimento da fé e inserção na comunidade como discípulo missionário.',
    coordinators: [
      { name: 'Ézio da Silva Cardoso', phone: '' },
    ],
  },
  {
    id:          'juventude',
    name:        'Pastoral da Juventude',
    description: 'O Grupo de Jovens é um espaço de evangelização que reúne adolescentes e jovens para o encontro com Cristo. Promove momentos de oração, formação, partilha e convivência fraterna. Serve aos jovens, ajudando-os a crescer na fé, nos valores cristãos e no compromisso com a Igreja e a sociedade, despertando o protagonismo juvenil.',
    coordinators: [
      { name: 'Júlia Rodrigues Estevanato Marques', phone: '' },
    ],
  },
  {
    id:          'apostolado-oracao',
    name:        'Pastoral do Apostolado da Oração',
    description: 'O Apostolado da Oração é um movimento de fiéis que busca a santificação pessoal e a evangelização, unindo-se a Cristo pelo oferecimento diário da vida, oração e Eucaristia. Cultiva a devoção ao Sagrado Coração de Jesus e reza pelas intenções do Papa, colaborando com a missão da Igreja e a salvação do mundo.',
    coordinators: [
      { name: 'Maria da Consolação Rezende', phone: '' },
    ],
  },
  {
    id:          'musica',
    name:        'Pastoral da Música',
    description: 'A Pastoral da Música tem como missão animar e servir a liturgia por meio do canto, ajudando os fiéis a rezar e participar ativamente das celebrações. Promove a evangelização, forma músicos litúrgica e espiritualmente e escolhe repertórios adequados, elevando a oração e a comunhão da comunidade.',
    coordinators: [
      { name: 'Osmar Marciano Alves', phone: '' },
    ],
  },
]

// ── Movimentos e Serviços ────────────────────────────────────
export const movements: Ministry[] = [
  {
    id:          'acolitos',
    name:        'Ministério dos Acólitos e Coroinhas',
    description: 'O Ministério dos Acólitos e Coroinhas auxilia o sacerdote nas celebrações litúrgicas, especialmente na Santa Missa, servindo ao altar com zelo e reverência. Contribui para a organização dos ritos e promove a formação espiritual e o amor à Eucaristia, incentivando crianças e jovens a crescerem na fé e no serviço à Igreja.',
    coordinators: [
      { name: 'Enilza Aparecida Fernandes', phone: '' },
    ],
  },
  {
    id:          'rcc',
    name:        'Grupo de Oração da Renovação Carismática (RCC)',
    description: 'O Grupo de Oração da Renovação Carismática Católica (RCC) reúne fiéis para louvar, rezar e aprofundar a experiência com o Espírito Santo. Promove momentos de oração, pregação, música e partilha. Serve a todos, acolhendo quem busca renovação espiritual, fortalecendo a fé e conduzindo a um encontro pessoal com Jesus Cristo.',
    coordinators: [
      { name: 'João Paulo', phone: '' },
    ],
  },
  {
    id:          'grupo-de-reflexao',
    name:        'Grupo de Reflexão',
    description: 'O Grupo de Reflexão é um espaço de encontro nas comunidades para meditar a Palavra de Deus e partilhar a vida à luz do Evangelho. Por meio de reuniões periódicas, promove oração, formação e fraternidade. Serve aos fiéis, fortalecendo a fé, a vivência comunitária e o compromisso cristão no dia a dia.',
    coordinators: [
      { name: 'Sebastião Lameu Gonçalves', phone: '' },
    ],
  },
  {
    id:          'ssvp',
    name:        'Sociedade de São Vicente de Paulo',
    description: 'A Sociedade de São Vicente de Paulo é uma organização leiga da Igreja que se dedica à caridade, por meio da visita às famílias em situação de vulnerabilidade. Promove ajuda material, apoio espiritual e promoção da dignidade humana. Serve aos mais necessitados, testemunhando o amor de Cristo com solidariedade e compromisso.',
    coordinators: [
      { name: 'Ana Maria Lacerda Ribeiro', phone: '' },
    ],
  },
  {
    id:          'carisma-mariano',
    name:        'Movimentos de Carisma Mariano',
    description: 'Os Movimentos de Carisma Mariano reúnem fiéis que cultivam a espiritualidade mariana, inspirados no exemplo de Maria. Promovem oração, formação e devoção, incentivando a vivência do Evangelho. Servem a todos que desejam crescer na fé, fortalecendo a comunhão com Cristo e a missão da Igreja sob a proteção da Virgem Maria.',
    coordinators: [
      { name: 'Rosilene Alves da Silva Dias', phone: '' },
    ],
  },
  {
    id:          'terco',
    name:        'Movimento do Terço — Homens, Mulheres e Crianças',
    description: 'O Movimento do Terço dos Homens, Mulheres e Crianças reúne fiéis para a oração semanal do terço, fortalecendo a espiritualidade, a devoção mariana e a evangelização. Meditando os mistérios de Cristo com Maria, promove a unidade familiar, o retorno à Igreja e o compromisso cristão na comunidade.',
    coordinators: [
      { name: 'Coordenadores Comunitários', phone: '' },
    ],
  },
  {
    id:          'epap',
    name:        'Equipe Paroquial de Assessoria Pastoral (EPAP)',
    description: 'A EPAP (Equipe Paroquial de Assessoria Pastoral) anima e coordena a ação evangelizadora nas comunidades, sendo elo entre o CPP e a base. Fortalece a vivência comunitária, promove a participação, apoia lideranças e implementa o planejamento pastoral, especialmente nas comunidades menores, garantindo unidade, comunhão e presença missionária da paróquia.',
    coordinators: [
      { name: 'Cleiton Marcos de Almeida', phone: '' },
    ],
  },
  {
    id:          'copar',
    name:        'Representante Paroquial no COPAR',
    description: 'A COPAR (Conselho Paroquial de Pastoral) é um organismo de comunhão e planejamento que reúne representantes das pastorais, movimentos e comunidades. Atua na organização e coordenação das ações evangelizadoras da paróquia. Serve a toda a comunidade, promovendo a unidade, a participação e a missão da Igreja.',
    coordinators: [
      { name: 'José Nunes do Amaral', phone: '' },
    ],
  },
]
