// ============================================================
//  SACRAMENTS — src/data/sacraments.ts
//  Edit sacrament info, requirements, and fees here.
// ============================================================

export interface Sacrament {
  id:           string
  name:         string
  subtitle:     string
  description:  string          // spiritual explanation
  requirements: string[]        // bullet list of what's needed
  howToRegister:string          // paragraph explaining the process
  contact?:     string          // who to call / where to go
  photo?:       string          // /public/images/sacramentos/
}

export const sacraments: Sacrament[] = [
  {
    id:       'batismo',
    name:     'Batismo',
    subtitle: 'O primeiro sacramento da vida cristã',
    description:
      'A Celebração do Batismo é o primeiro e mais importante sacramento da vida cristã, porta de entrada para todos os demais. Conforme orienta a Diocese de Itabira-Fabriciano, por meio dele a pessoa é libertada do pecado original, renasce pela água e pelo Espírito Santo e passa a fazer parte da Igreja, tornando-se filha de Deus e discípula de Jesus Cristo.\n\nRealizado, em geral, para crianças (mas também disponível a jovens e adultos não batizados), o Batismo é uma celebração comunitária, pois insere o novo cristão na família de fé. Durante o rito, destacam-se sinais importantes como a água (purificação e vida nova), o óleo (força do Espírito Santo), a veste branca (vida nova em Cristo) e a vela (luz de Cristo que deve ser mantida acesa na fé).\n\nAlém de um momento de graça, o Batismo é também um compromisso sério assumido pelos pais e padrinhos, que prometem educar o batizado na fé, ensinando-o a viver os valores do Evangelho e a participar da vida da Igreja.\n\nMais do que uma tradição social, o Batismo é um verdadeiro encontro com Deus. Ele marca o início de uma caminhada de fé que deve ser cultivada ao longo da vida. Por isso, a Igreja insiste na escolha consciente dos padrinhos e na preparação adequada da família, para que o batizado cresça em sabedoria, graça e compromisso cristão.',
    requirements: [
      'Certidão de nascimento da criança',
      'Certidão de casamento dos pais ou, se solteiros, documento de identidade',
      'Comprovante de residência',
      'Curso de preparação ao Batismo obrigatório para pais e padrinhos',
      'Em alguns casos, autorização da paróquia de origem (se pais ou padrinhos forem de outra paróquia)',
      'Padrinhos: normalmente 1 padrinho e 1 madrinha (ou apenas um); devem ser católicos e ter recebido Batismo, 1ª Eucaristia e Crisma',
      'Padrinhos não podem ser os próprios pais da criança',
      'Cristãos não católicos podem participar apenas como testemunhas, junto a um padrinho católico',
      'O Batismo deve ser agendado previamente na secretaria paroquial',
      'Vestimenta adequada, discreta e respeitosa para a celebração',
    ],
    howToRegister: 'Na Secretaria Paroquial',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/batismo.jpg',
  },
  {
    id:       'primeira-eucaristia',
    name:     'Primeira Eucaristia',
    subtitle: 'O alimento da vida cristã',
    description:
      'A Primeira Eucaristia é o sacramento pelo qual o fiel, devidamente preparado, recebe pela primeira vez o Corpo e o Sangue de Jesus Cristo, presente na Eucaristia. Conforme a orientação da Diocese de Itabira-Fabriciano, este sacramento fortalece a vida cristã, une mais profundamente o fiel a Cristo e à Igreja, e o alimenta espiritualmente para viver o Evangelho.\n\nDestina-se, em geral, a crianças a partir dos 9 anos, após um período de formação catequética, podendo também ser recebido por jovens e adultos não iniciados na fé. É um momento marcante de amadurecimento espiritual e de inserção mais plena na vida sacramental da Igreja.\n\nMais do que um rito de passagem, a Primeira Eucaristia é o início de uma vida alimentada pela presença real de Cristo. A Igreja convida as famílias a continuarem acompanhando os filhos na fé, incentivando a participação na Missa e na vida comunitária, para que este encontro com Jesus produza frutos duradouros de amor, fé e compromisso cristão.',
    requirements: [
      'Participação obrigatória na catequese de Primeira Eucaristia (geralmente 1 a 2 anos)',
      'Frequência regular nos encontros e participação na Santa Missa',
      'Certidão de Batismo atualizada',
      'Documentos pessoais do catequizando e dos responsáveis',
      'A criança ou catequizando deve estar batizado',
      'Deve receber o sacramento da Reconciliação (primeira confissão) antes da Primeira Eucaristia',
      'Celebração realizada em missa solene preparada pela paróquia; uso de vestes claras, discretas e respeitosas',
    ],
    howToRegister: 'Na Secretaria Paroquial',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/eucaristia.jpg',
  },
  {
    id:       'crisma',
    name:     'Crisma',
    subtitle: 'A plenitude do Espírito Santo',
    description:
      'A Crisma (ou Confirmação) é o sacramento que completa a iniciação cristã, juntamente com o Batismo e a Eucaristia. Conforme ensina a Diocese de Itabira-Fabriciano, por meio dela o fiel recebe a plenitude do Espírito Santo, sendo fortalecido na fé e assumindo, de forma mais consciente e madura, o compromisso de viver e testemunhar o Evangelho.\n\nMais do que um rito, a Crisma é um envio: o cristão é chamado a ser testemunha de Cristo no mundo, defendendo a fé por palavras e atitudes e participando ativamente da missão da Igreja. Destina-se a jovens e adultos já batizados, normalmente a partir dos 14 ou 15 anos.\n\nA Crisma não é o "fim" da catequese, mas o início de uma fé adulta e comprometida. Ao recebê-la, o cristão é chamado a colocar seus dons a serviço da Igreja e da sociedade, vivendo como verdadeiro missionário, guiado pelo Espírito Santo.',
    requirements: [
      'Ser batizado e, normalmente, já ter feito a Primeira Eucaristia',
      'Participação obrigatória na catequese de Crisma (geralmente 1 a 2 anos)',
      'Frequência nos encontros e participação na Santa Missa',
      'Certidão de Batismo atualizada',
      'Certificado ou comprovante da Primeira Eucaristia',
      'Documentos pessoais e ficha de inscrição paroquial',
      'Participar da Confissão (Reconciliação) antes de receber a Crisma',
      'Padrinho ou madrinha: católico praticante, com fé madura, que tenha recebido os três sacramentos de iniciação; mínimo de 16 anos; não pode ser pai ou mãe do crismando',
      'Celebração geralmente presidida pelo Bispo; vestimenta adequada ao ambiente litúrgico',
    ],
    howToRegister: 'Na Secretaria Paroquial',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/crisma.jpg',
  },
  {
    id:       'matrimonio',
    name:     'Matrimônio',
    subtitle: 'A aliança de amor entre os esposos',
    description:
      'O Matrimônio é um dos sete sacramentos da Igreja Católica, instituído por Deus para unir o homem e a mulher em aliança de amor, fidelidade e vida. Por meio dele, os esposos recebem a graça divina para viverem a vocação matrimonial, formando uma família cristã, aberta à vida e comprometida com a fé.\n\nO Matrimônio consagra a união entre os noivos, tornando-os sinal do amor de Cristo pela Igreja. Fortalece a vida conjugal, promove a santificação dos esposos e sustenta a missão de educar os filhos na fé cristã.\n\nO Matrimônio é vocação e missão: um caminho de santidade vivido a dois, com Deus no centro da família.',
    requirements: [
      'Ser batizado (obrigatório); recomenda-se ter feito Primeira Comunhão e Crisma',
      'Livre consentimento dos noivos; intenção de vida conjugal fiel e aberta aos filhos',
      'Documento de Identidade',
      'Certidão de Batismo atualizada (emitida há no máximo 6 meses)',
      'Edital do cartório',
      'Comprovante de residência',
      'Certificado do curso de noivos (obrigatório — 2 meses, 9 encontros semanais)',
      'Documentos de identidade e comprovante de residência de 2 casais de testemunhas',
      'Documentos de transferência se casar fora da paróquia de origem',
      'Prazo mínimo: documentação entregue com 90 dias de antecedência',
      'Abertura do processo na paróquia de residência de um dos noivos; publicação dos proclamas por 3 domingos',
      'Entrevista com o padre (conversa pastoral sobre fé, família e compromisso)',
      'Reserva da igreja com antecedência (pode ser feita com até 1 ano)',
      'Taxa: R$ 540,00 (equivalente a 1/3 do salário-mínimo)',
      'Casamento civil obrigatório antes ou no mesmo dia (ou casamento religioso com efeito civil)',
      'Noivos de outra religião: possível mediante dispensa da Igreja; um dos dois deve ser católico',
      'Padrinhos: geralmente 2 casais; devem ser exemplos de vida cristã',
    ],
    howToRegister: 'Na Secretaria Paroquial — iniciar o processo com 3 a 6 meses de antecedência',
    contact: 'Secretaria Paroquial — (31) 3822-4420',
    photo:   '/images/sacramentos/casamento.jpg',
  },
]

// ── Fees ─────────────────────────────────────────────────────
export const feesInfo = {
  title:       'Taxas, Espórtulas e Emolumentos',
  description: 'Os valores a seguir são estabelecidos pela Diocese de Itabira–Coronel Fabriciano.',
  downloadUrl: '',
  note:        'Taxas vigentes em 2026, conforme tabela da Diocese de Itabira–Coronel Fabriciano.',
  items: [
    { label: 'Batizado',                                                      value: 'R$ 81,00',  detail: '5% do salário-mínimo' },
    { label: 'Matrimônio',                                                    value: 'R$ 540,00', detail: '1/3 do salário-mínimo' },
    { label: 'Crisma',                                                        value: 'R$ 81,00',  detail: '5% do salário-mínimo' },
    { label: 'Certidões (batismo, crisma, matrimônio)',                       value: 'R$ 81,00',  detail: '5% do salário-mínimo' },
    { label: 'Transferência de Processo de Habilitação Matrimonial (para outra Diocese)', value: 'R$ 270,00', detail: '50% do valor da taxa vigente' },
    { label: 'Recepção do Processo de Habilitação Matrimonial (de outra Diocese)',        value: 'R$ 270,00', detail: '50% do valor da taxa vigente' },
    { label: 'Pesquisa no arquivo Diocesano',                                 value: 'R$ 49,00',  detail: '3% do salário-mínimo' },
    { label: 'Emissão de documento de pleno teor',                            value: 'R$ 81,00',  detail: '5% do salário-mínimo' },
  ],
}
