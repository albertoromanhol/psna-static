import { PageHero } from '@/components/ui/PageHero'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { parish } from '@/data/contacts'

// Privacy policy sections — edit text here or in a separate data file if it grows large
const sections = [
  {
    n: '1', title: 'Apresentação',
    text: `A Paróquia Nossa Senhora Aparecida valoriza a privacidade, a segurança e o respeito aos dados pessoais de seus fiéis, colaboradores, voluntários e visitantes. Esta Política tem o objetivo de explicar, de forma simples e transparente, como coletamos, utilizamos, armazenamos e protegemos os dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), o Marco Civil da Internet e demais legislações aplicáveis.`,
  },
  {
    n: '2', title: 'A Quem Esta Política se Aplica',
    text: `Esta Política se aplica a todas as pessoas que se relacionam com a Paróquia, incluindo: Fiéis e dizimistas, Pais e responsáveis por crianças e adolescentes, Participantes de pastorais, movimentos e eventos, Visitantes do site e redes sociais, Voluntários, colaboradores e prestadores de serviço.`,
  },
  {
    n: '3', title: 'Dados Pessoais que Podemos Coletar',
    text: `3.1 Dados de identificação: Nome, CPF, RG, data de nascimento, filiação, estado civil, endereço, telefone e e-mail.\n\n3.2 Dados religiosos e pastorais: Informações relacionadas à participação em sacramentos, pastorais, movimentos e serviços na comunidade.\n\n3.3 Dados sensíveis: Em situações específicas, podem ser coletados dados como informações de saúde (ex.: para visitas a enfermos) ou dados religiosos, sempre com cuidado especial e base legal adequada.\n\n3.4 Imagem e voz: Fotos, vídeos e gravações de celebrações, encontros e eventos paroquiais.\n\n3.5 Dados digitais: Endereço IP, navegador, páginas acessadas e cookies quando há uso do site ou plataformas digitais da Paróquia.`,
  },
  {
    n: '4', title: 'Para que Utilizamos os Dados',
    text: `Os dados são utilizados para finalidades legítimas da vida paroquial, tais como: Organização e registro de sacramentos; Comunicação sobre missas, eventos, pastorais e campanhas; Administração de cadastros paroquiais e dizimistas; Divulgação de atividades religiosas e evangelização; Cumprimento de obrigações legais, contábeis e canônicas; Preservação da memória histórica da Paróquia.`,
  },
  {
    n: '5', title: 'Base Legal para o Tratamento',
    text: `O tratamento de dados é realizado com fundamento em: Consentimento do titular; Cumprimento de obrigação legal ou regulatória; Exercício regular de direitos; Proteção da vida ou da incolumidade física; Legítimo interesse institucional da Paróquia para fins religiosos e pastorais.`,
  },
  {
    n: '6', title: 'Compartilhamento de Dados',
    text: `Os dados podem ser compartilhados apenas quando necessário, com: A Diocese de Itabira–Coronel Fabriciano; Prestadores de serviço que atuam em nome da Paróquia; Órgãos públicos, quando exigido por lei; Plataformas digitais usadas para transmissões e comunicações oficiais. Não vendemos nem comercializamos dados pessoais.`,
  },
  {
    n: '7', title: 'Uso de Imagem em Celebrações e Eventos',
    text: `Durante missas e eventos públicos, podem ser feitas fotos e gravações para divulgação das atividades da Paróquia em: Redes sociais oficiais; Site da Paróquia; Informativos e materiais pastorais. Caso o fiel não deseje ter sua imagem divulgada, poderá solicitar à Secretaria Paroquial.`,
  },
  {
    n: '8', title: 'Cookies e Dados de Navegação',
    text: `O site da Paróquia pode utilizar cookies para melhorar a experiência do usuário, entender o uso das páginas e aprimorar os conteúdos. O usuário pode desativar os cookies nas configurações do seu navegador, ciente de que isso pode limitar algumas funcionalidades.`,
  },
  {
    n: '9', title: 'Armazenamento e Segurança dos Dados',
    text: `A Paróquia adota medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda ou uso indevido. Os dados podem ser armazenados em arquivos físicos e sistemas digitais, inclusive em nuvem, com níveis adequados de segurança.`,
  },
  {
    n: '10', title: 'Direitos do Titular dos Dados',
    text: `Nos termos da LGPD, o titular pode solicitar a qualquer momento: Confirmação da existência de tratamento de dados; Acesso aos seus dados; Correção de dados incompletos ou desatualizados; Anonimização, bloqueio ou eliminação de dados desnecessários; Informação sobre compartilhamentos realizados; Revogação do consentimento.`,
  },
  {
    n: '11', title: 'Links para Sites de Terceiros',
    text: `O site da Paróquia pode conter links para páginas externas. A Paróquia não se responsabiliza pelas políticas de privacidade desses sites.`,
  },
  {
    n: '12', title: 'Alterações nesta Política',
    text: `Esta Política poderá ser atualizada sempre que necessário para refletir mudanças legais ou melhorias internas. A versão mais recente estará sempre disponível nos canais oficiais da Paróquia.`,
  },
  {
    n: '13', title: 'Contato para Assuntos de Privacidade',
    text: `Secretaria Paroquial — Paróquia Nossa Senhora Aparecida\n${parish.email}\n${parish.phones.general}`,
  },
]

export function Privacidade() {
  return (
    <>
      <PageHero title="Política de Privacidade" small />
      <section className="section-white">
        <div className="content-wrap max-w-3xl">
          <p className="text-sm text-ink-muted mb-2">
            {parish.name} | CNPJ: {parish.cnpj}
          </p>
          <p className="text-sm text-ink-muted mb-8">
            Versão: 03 · Ipatinga/MG, 23 de abril de 2025
          </p>
          <GoldDivider icon className="mb-10" />

          <div className="space-y-8">
            {sections.map(s => (
              <div key={s.n}>
                <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                  {s.n}. {s.title}
                </h2>
                {s.text.split('\n\n').map((para, i) => (
                  <p key={i} className="text-ink-muted leading-relaxed mb-2">{para}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-surface border border-border p-6">
            <p className="text-sm text-ink-muted">
              Assinado por: <strong className="text-ink">{parish.pastor}</strong><br />
              Pároco — Paróquia Nossa Senhora Aparecida
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
