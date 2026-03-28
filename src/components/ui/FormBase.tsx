import { type FormEvent, useState, type ReactNode } from 'react'
import * as Label from '@radix-ui/react-label'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from './Button'
import { formspreeBase } from '@/data/forms'

interface Field {
  name:        string
  label:       string
  type:        'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?:   boolean
  placeholder?: string
  options?:    { value: string; label: string }[]  // for select
  rows?:       number  // for textarea
}

interface FormBaseProps {
  endpointId: string   // Formspree form ID
  fields:     Field[]
  submitLabel?: string
  successMessage?: string
  children?: ReactNode  // extra content above the form
}

export function FormBase({
  endpointId,
  fields,
  submitLabel = 'Enviar',
  successMessage = 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
  children,
}: FormBaseProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!endpointId) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(`${formspreeBase}${endpointId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-8 text-center">
        <CheckCircle size={40} className="text-gold" />
        <p className="font-heading text-lg font-semibold text-primary">Enviado!</p>
        <p className="text-ink-muted">{successMessage}</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-primary underline underline-offset-2">
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  const inputClass = `w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-ink
    placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
    transition-colors`

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {children}

      {fields.map(field => (
        <div key={field.name} className="space-y-1.5">
          <Label.Root htmlFor={field.name} className="block text-sm font-medium text-ink">
            {field.label}{field.required && <span className="text-alert ml-0.5">*</span>}
          </Label.Root>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={field.rows ?? 5}
              className={inputClass}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>Selecione...</option>
              {field.options?.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className={inputClass}
            />
          )}
        </div>
      ))}

      {/* LGPD consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" name="lgpd_consent" required
               className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
        <span className="text-sm text-ink-muted">
          Li e concordo com a{' '}
          <a href="/paroquia/privacidade" target="_blank" className="text-primary underline underline-offset-2">
            Política de Privacidade
          </a>{' '}
          da Paróquia Nossa Senhora Aparecida. <span className="text-alert">*</span>
        </span>
      </label>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-alert/10 px-4 py-3 text-sm text-alert">
          <AlertCircle size={16} />
          {endpointId
            ? 'Erro ao enviar. Por favor, tente novamente ou entre em contato pelo telefone.'
            : 'Formulário ainda não configurado. Entre em contato pelo telefone ou WhatsApp.'}
        </div>
      )}

      <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? 'Enviando...' : submitLabel}
      </Button>
    </form>
  )
}
