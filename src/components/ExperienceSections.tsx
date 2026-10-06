import { FormEvent, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const steps = [
  ['01', 'Conversa', 'Falamos sobre a ideia, o local, o tamanho e a história por trás dela.'],
  ['02', 'Desenho', 'A pessoa tatuadora transforma o flash em algo só seu.'],
  ['03', 'Preparação', 'Bancada limpa, sala tranquila e tudo pronto antes da agulha começar.'],
  ['04', 'Tatuagem', 'Mãos firmes, boa música e nenhum motivo para apressar o trabalho.'],
  ['05', 'Cuidados', 'Orientações claras para sua peça cicatrizar bem e envelhecer com beleza.'],
]
const reviews = [
  ['“Melhor experiência de tatuagem que já tive. O estúdio inteiro valoriza o ofício.”', 'Cliente demonstrativo 01'],
  ['“Uma ideia pequena virou algo que vou levar pelo resto da vida.”', 'Cliente demonstrativo 02'],
  ['“Old school do melhor jeito: acolhedor, preciso e sem atalhos.”', 'Cliente demonstrativo 03'],
]
const questions = ['Quanto custa uma tatuagem?', 'Como devo me preparar?', 'Vocês atendem sem agendamento?', 'Posso levar meu próprio desenho?', 'Como funciona o agendamento?', 'Como cuidar da tatuagem?']

export function ExperienceSections() {
  const [step, setStep] = useState(0)
  const [review, setReview] = useState(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 900)
  }

  return <>
    <section className="process-section paper-section" id="process">
      <div className="section-kicker"><span>05 / O ritual</span><span>Do desenho à pele</span></div>
      <div className="process-grid"><div><p className="eyebrow">Sem mistério. Sem pressa.</p><h2 className="display display-dark">DO<br /><i>DESENHO</i><br />À PELE<span>.</span></h2></div><div className="process-detail"><span className="process-index">{steps[step][0]}</span><h3>{steps[step][1]}</h3><p>{steps[step][2]}</p><div className="process-controls">{steps.map(([number, title], index) => <button key={number} className={index === step ? 'is-active' : ''} onClick={() => setStep(index)}><span>{number}</span>{title}</button>)}</div></div></div>
    </section>
    <section className="reviews-section dark-placeholder" id="reviews">
      <div className="section-kicker"><span>06 / O que dizem</span><span>★★★★★</span></div>
      <div className="review-wrap"><p className="eyebrow">Depoimentos demonstrativos</p><blockquote>{reviews[review][0]}</blockquote><p className="review-author">— {reviews[review][1]}</p><div className="review-controls"><button onClick={() => setReview((review + reviews.length - 1) % reviews.length)} aria-label="Depoimento anterior">←</button><span>0{review + 1} / 0{reviews.length}</span><button onClick={() => setReview((review + 1) % reviews.length)} aria-label="Próximo depoimento">→</button></div></div>
    </section>
    <section className="booking-section" id="book">
      <div className="booking-intro"><p className="eyebrow">07 / Comece uma conversa</p><h2 className="display">PRONTO<br /><i>PARA</i><br />TATUAR<span>?</span></h2><p>Conte o que você está imaginando. Sem compromisso, apenas o primeiro passo.</p></div>
      <form className="booking-form" onSubmit={submit}>
        {status === 'success' ? <div className="form-success"><span>✦</span><h3>Sua ideia<br />foi recebida.</h3><p>Entraremos em contato. Este é um formulário demonstrativo.</p></div> : <><div className="form-row"><label>Nome<input required name="name" placeholder="Seu nome completo" /></label><label>E-mail<input required type="email" name="email" placeholder="voce@exemplo.com" /></label></div><div className="form-row"><label>Instagram<input name="instagram" placeholder="@usuario_demo" /></label><label>Estilo<select name="style" defaultValue=""><option value="" disabled>Selecione um estilo</option><option>Tradicional</option><option>Blackwork</option><option>Lettering</option></select></label></div><div className="form-row"><label>Local do corpo<input required name="placement" placeholder="Antebraço, peito..." /></label><label>Tamanho<select required name="size" defaultValue=""><option value="" disabled>Tamanho aproximado</option><option>Pequena</option><option>Média</option><option>Grande</option></select></label></div><label>Conte sobre a tatuagem<textarea required name="description" rows={4} placeholder="Ideia, referências e outras informações..." /></label><label>Imagem de referência<input type="file" name="reference" accept="image/png,image/jpeg,image/webp" /></label><label>Data preferida<input type="date" name="date" /></label><button className="button button-primary form-submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : 'Iniciar agendamento'} <ArrowUpRight size={17} /></button></>}
      </form>
    </section>
    <section className="faq-section paper-section" id="faq"><div className="section-kicker"><span>08 / Bom saber</span><span>Perguntas respondidas</span></div><div className="faq-layout"><h2 className="display display-dark">AS<br /><i>LETRAS</i><br />MIÚDAS<span>.</span></h2><div className="faq-list">{questions.map((question, index) => <div className="faq-item" key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}><span>0{index + 1}</span>{question}<ChevronDown size={17} /></button>{openQuestion === index && <p>{index === 0 ? 'Cada tatuagem é diferente. O orçamento considera tamanho, detalhes, local e a pessoa tatuadora escolhida. Tudo é combinado antes do agendamento.' : 'Envie uma mensagem e responderemos com as informações específicas para sua sessão. Este conteúdo é demonstrativo.'}</p>}</div>)}</div></div></section>
    <footer className="site-footer"><div className="footer-top"><a className="brand" href="#home"><span className="brand-mark">✦</span><span className="brand-name">IRON ROSE</span><span className="brand-subtitle">ESTÚDIO FICTÍCIO · DEMO</span></a><div className="footer-links"><a href="#flash">Desenhos</a><a href="#artists">Artistas</a><a href="#parlor">Estúdio</a><a href="#book">Agendar</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div><div className="footer-contact">Localização demonstrativa<br /><a href="mailto:demo@example.invalid">demo@example.invalid</a><br />Horários demonstrativos</div></div><div className="footer-bottom"><span>© 2025 Iron Rose · Projeto demonstrativo</span><strong>TINTA<br />NUNCA SOME.</strong><a href="#home">Voltar ao topo ↑</a></div></footer>
  </>
}
