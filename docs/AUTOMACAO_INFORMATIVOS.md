# Automação dos Informativos (Google Drive → Site)

Toda **segunda-feira às 09h (BRT)** um GitHub Action baixa os PDFs da pasta do
Google Drive, commita os arquivos novos e o Vercel publica automaticamente.

- Workflow: `.github/workflows/sync-informativos.yml`
- Pasta do Drive: `1IUPmWDBw4N3aHd7THJ3hl7RZvvYjS9Lu`

## Como funciona

1. O Action usa o [`rclone`](https://rclone.org) com uma **Service Account** do
   Google pra ler a pasta compartilhada.
2. Copia todo arquivo com o nome `informative-YYYY-MM.pdf` (ex:
   `informative-2026-08.pdf`) pra `public/informativos/`.
3. Se algo mudou, faz commit e push → o Vercel faz o deploy sozinho.

> O site (`vite.config.ts`) lê a pasta e monta a lista automaticamente. Aceita
> tanto `informativo-` quanto `informative-`, sempre no formato **ano-mês**.
> **Basta o nome do arquivo no Drive seguir esse padrão** — nada mais é preciso.

## Setup (só uma vez)

### 1. Criar a Service Account no Google Cloud

1. Acesse <https://console.cloud.google.com/> e crie (ou escolha) um projeto.
2. Ative a **Google Drive API**: APIs & Services → Library → "Google Drive API" → Enable.
3. APIs & Services → Credentials → **Create Credentials** → **Service account**.
4. Dê um nome (ex: `informativos-sync`) e finalize.
5. Abra a conta criada → aba **Keys** → **Add key** → **Create new key** → **JSON**.
   Baixe o arquivo `.json` (é a credencial).

### 2. Compartilhar a pasta do Drive com a Service Account

1. Copie o e-mail da Service Account (algo como
   `informativos-sync@projeto.iam.gserviceaccount.com`).
2. No Google Drive, abra a pasta dos informativos → **Compartilhar** → cole esse
   e-mail → permissão **Leitor** → enviar.

### 3. Cadastrar os secrets no GitHub

No repositório: **Settings → Secrets and variables → Actions → New repository secret**:

| Nome | Valor |
|---|---|
| `GDRIVE_SA_JSON` | conteúdo **inteiro** do arquivo `.json` baixado |
| `GDRIVE_FOLDER_ID` | `1IUPmWDBw4N3aHd7THJ3hl7RZvvYjS9Lu` |

### 4. Testar

**Actions → "Sync informativos from Google Drive" → Run workflow.** Confira os
logs; se aparecerem os PDFs copiados e um commit, está funcionando.

## Padrão de nome no Drive

Nomeie os arquivos como `informative-ANO-MÊS.pdf`, sempre com 2 dígitos no mês:

- ✅ `informative-2026-08.pdf` (agosto de 2026)
- ❌ `informative-8-2026.pdf`, `Informativo Agosto.pdf`

Arquivos fora desse padrão são simplesmente ignorados pela automação.
