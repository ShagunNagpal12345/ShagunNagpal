import { useEffect, useRef, useState } from 'react'
import { ArrowUp, BriefcaseBusiness, MessageCircle, RotateCcw, Sparkles, X } from 'lucide-react'
import avatar from '../assets/profile/avatar.png'

const MAX_CHARACTERS = 900
const MAX_WORDS = 150

const starterQuestions = [
  'Give me a quick overview of Shagun’s career.',
  'What are Shagun’s strongest BI and analytics skills?',
  'Tell me about Shagun’s most impactful projects.',
  'Assess Shagun’s fit for a BI leadership role.',
]

const initialMessage = {
  role: 'assistant',
  content: 'Hi, I’m Shagun’s AI assistant. Ask me about his work, projects, and experience.',
}

function wordCount(value) {
  return value.trim() ? value.trim().split(/\s+/).length : 0
}

export default function ShagunAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([initialMessage])
  const [draft, setDraft] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const conversationRef = useRef(null)

  const words = wordCount(draft)
  const isOverLimit = draft.length > MAX_CHARACTERS || words > MAX_WORDS

  useEffect(() => {
    if (isOpen) window.setTimeout(() => inputRef.current?.focus(), 220)
  }, [isOpen])

  useEffect(() => {
    conversationRef.current?.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isLoading])

  useEffect(() => {
    if (!isOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const submitQuestion = async (question = draft) => {
    const cleanQuestion = question.trim()
    if (!cleanQuestion || isLoading) return

    if (cleanQuestion.length > MAX_CHARACTERS || wordCount(cleanQuestion) > MAX_WORDS) {
      setError(`Please keep your question under ${MAX_WORDS} words and ${MAX_CHARACTERS} characters.`)
      return
    }

    const userMessage = { role: 'user', content: cleanQuestion }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setDraft('')
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      })
      const contentType = response.headers.get('content-type') || ''
      const data = contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : {}

      if (!response.ok) {
        throw new Error(
          data.error ||
          (response.status === 404
            ? 'Shagun AI could not find its API endpoint. Please check the deployment configuration.'
            : 'Shagun AI is unavailable right now. Please try again shortly.'),
        )
      }

      if (!data.answer) throw new Error('Shagun AI received an invalid response. Please try again shortly.')

      setMessages((current) => [...current, { role: 'assistant', content: data.answer }])
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setIsLoading(false)
    }
  }

  const resetConversation = () => {
    setMessages([initialMessage])
    setDraft('')
    setError('')
    inputRef.current?.focus()
  }

  return (
    <div className="shagun-ai" data-open={isOpen || undefined}>
      <button
        type="button"
        className="shagun-ai-trigger"
        aria-label={isOpen ? 'Close Ask Shagun' : 'Open Ask Shagun'}
        aria-expanded={isOpen}
        aria-controls="shagun-ai-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="shagun-ai-trigger-avatar" aria-hidden="true">
          <img src={avatar} alt="" />
          <span className="shagun-ai-status-dot" />
        </span>
        <span className="shagun-ai-trigger-copy">
          <strong>Ask Shagun</strong>
          <small>Career, projects & role fit</small>
        </span>
        {isOpen ? <X size={18} aria-hidden="true" /> : <MessageCircle size={18} aria-hidden="true" />}
      </button>

      <section
        id="shagun-ai-panel"
        className="shagun-ai-panel"
        aria-label="Ask Shagun AI assistant"
        aria-hidden={!isOpen}
      >
        <header className="shagun-ai-header">
          <div className="shagun-ai-identity">
            <img src={avatar} alt="Shagun AI" />
            <div>
              <span className="shagun-ai-kicker"><Sparkles size={12} /> Shagun AI</span>
              <h2>Ask Shagun</h2>
            </div>
          </div>
          <div className="shagun-ai-header-actions">
            <button type="button" onClick={resetConversation} aria-label="Start a new conversation" title="New conversation">
              <RotateCcw size={17} />
            </button>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close Ask Shagun">
              <X size={19} />
            </button>
          </div>
        </header>

        <div className="shagun-ai-conversation" ref={conversationRef} aria-live="polite">
          {messages.map((message, index) => (
            <div className={`shagun-ai-message ${message.role}`} key={`${message.role}-${index}`}>
              {message.role === 'assistant' && <img src={avatar} alt="" aria-hidden="true" />}
              <p>{message.content}</p>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="shagun-ai-starters" aria-label="Suggested questions">
              <span><BriefcaseBusiness size={14} /> Try asking</span>
              {starterQuestions.map((question) => (
                <button key={question} type="button" onClick={() => submitQuestion(question)}>
                  {question}
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="shagun-ai-message assistant shagun-ai-thinking" role="status">
              <img src={avatar} alt="" aria-hidden="true" />
              <p><span /><span /><span /><em>Reviewing Shagun’s profile</em></p>
            </div>
          )}
        </div>

        <form
          className="shagun-ai-composer"
          onSubmit={(event) => {
            event.preventDefault()
            submitQuestion()
          }}
        >
          {error && <p className="shagun-ai-error" role="alert">{error}</p>}
          <div className="shagun-ai-input-wrap">
            <textarea
              ref={inputRef}
              value={draft}
              rows={2}
              maxLength={MAX_CHARACTERS + 1}
              placeholder="Ask about experience, skills, or paste a short role summary…"
              aria-label="Your question for Shagun AI"
              aria-describedby="shagun-ai-limit"
              onChange={(event) => {
                setDraft(event.target.value)
                setError('')
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault()
                  submitQuestion()
                }
              }}
            />
            <button type="submit" disabled={!draft.trim() || isLoading || isOverLimit} aria-label="Send question">
              <ArrowUp size={18} />
            </button>
          </div>
          <div id="shagun-ai-limit" className={isOverLimit ? 'is-over' : undefined}>
            <span>Shagun-related questions only</span>
            <span>{words}/{MAX_WORDS} words</span>
          </div>
        </form>
      </section>
    </div>
  )
}
