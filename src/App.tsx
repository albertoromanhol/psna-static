import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

// Pages
import { Home }          from '@/pages/Home'
import { ParoquiaHub }   from '@/pages/paroquia/ParoquiaHub'
import { Historia }      from '@/pages/paroquia/Historia'
import { Padroeira }     from '@/pages/paroquia/Padroeira'
import { Clero }         from '@/pages/paroquia/Clero'
import { Brasao }        from '@/pages/paroquia/Brasao'
import { Comunidades }   from '@/pages/paroquia/Comunidades'
import { CppCaep }       from '@/pages/paroquia/CppCaep'
import { Pastorais }     from '@/pages/paroquia/Pastorais'
import { Movimentos }    from '@/pages/paroquia/Movimentos'
import { Privacidade }   from '@/pages/paroquia/Privacidade'

import { ParaVoceHub }   from '@/pages/para-voce/ParaVoceHub'
import { Missas }        from '@/pages/para-voce/Missas'
import { Confissoes }    from '@/pages/para-voce/Confissoes'
import { ElosLiturgicos }from '@/pages/para-voce/ElosLiturgicos'
import { Agenda }        from '@/pages/para-voce/Agenda'
import { SacramentosHub }from '@/pages/para-voce/sacramentos/SacramentosHub'
import { SacramentPage } from '@/pages/para-voce/sacramentos/SacramentPage'
import { Taxas }         from '@/pages/para-voce/sacramentos/Taxas'
import { Oracao }        from '@/pages/para-voce/Oracao'
import { Noticias }      from '@/pages/para-voce/Noticias'

import { MidiasSociais } from '@/pages/MidiasSociais'
import { Contato }       from '@/pages/Contato'

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/"                               element={<Home />} />

        {/* Paróquia */}
        <Route path="/paroquia"                       element={<ParoquiaHub />} />
        <Route path="/paroquia/historia"              element={<Historia />} />
        <Route path="/paroquia/padroeira"             element={<Padroeira />} />
        <Route path="/paroquia/clero"                 element={<Clero />} />
        <Route path="/paroquia/brasao"                element={<Brasao />} />
        <Route path="/paroquia/comunidades"           element={<Comunidades />} />
        <Route path="/paroquia/cpp"                   element={<CppCaep type="cpp" />} />
        <Route path="/paroquia/caep"                  element={<CppCaep type="caep" />} />
        <Route path="/paroquia/pastorais"             element={<Pastorais />} />
        <Route path="/paroquia/movimentos"            element={<Movimentos />} />
        <Route path="/paroquia/privacidade"           element={<Privacidade />} />

        {/* Para Você */}
        <Route path="/para-voce"                      element={<ParaVoceHub />} />
        <Route path="/para-voce/missas"               element={<Missas />} />
        <Route path="/para-voce/confissoes"           element={<Confissoes />} />
        <Route path="/para-voce/elos-liturgicos"      element={<ElosLiturgicos />} />
        <Route path="/para-voce/agenda"               element={<Agenda />} />
        <Route path="/para-voce/oracao"               element={<Oracao />} />
        <Route path="/para-voce/noticias"             element={<Noticias />} />

        {/* Sacramentos */}
        <Route path="/para-voce/sacramentos"                    element={<SacramentosHub />} />
        <Route path="/para-voce/sacramentos/batizados"          element={<SacramentPage id="batizados" />} />
        <Route path="/para-voce/sacramentos/eucaristia"         element={<SacramentPage id="eucaristia" />} />
        <Route path="/para-voce/sacramentos/crisma"             element={<SacramentPage id="crisma" />} />
        <Route path="/para-voce/sacramentos/casamento"          element={<SacramentPage id="casamento" />} />
        <Route path="/para-voce/sacramentos/taxas"              element={<Taxas />} />

        {/* Mídias Sociais & Contato */}
        <Route path="/midias-sociais"                 element={<MidiasSociais />} />
        <Route path="/contato"                        element={<Contato />} />

        {/* Fallback */}
        <Route path="*"                               element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
