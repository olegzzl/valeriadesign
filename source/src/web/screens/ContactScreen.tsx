import React, { useState } from 'react';
import type { Lang, Project } from '../../types';
import { UI } from '../../i18n';
import { Pixel } from '../components/Pixel';

interface ContactProps {
  lang: Lang;
  projects: Project[];
  initialProject: string;
  intent: 'order' | 'estimate' | 'contact';
  goBack: () => void;
}

export const ContactScreen: React.FC<ContactProps> = ({ lang, projects, initialProject, intent, goBack }) => {
  const t = UI[lang];
  const [projectId, setProjectId] = useState(initialProject);
  const [name, setName] = useState('');
  const [channel, setChannel] = useState('Telegram');
  const [contact, setContact] = useState('');
  const [task, setTask] = useState('');
  const [prepared, setPrepared] = useState(false);

  const title = intent === 'estimate' ? t.requestTitleEstimate : intent === 'contact' ? t.requestTitleContact : t.requestTitleOrder;
  const kicker = intent === 'estimate' ? t.requestKickerEstimate : intent === 'contact' ? t.requestKickerContact : t.requestKickerOrder;
  const selected = projects.find((p) => p.id === projectId);
  const channels = ['Telegram', 'Instagram', 'Email', t.channelPhone];
  const isEmail = channel === 'Email';
  const isPhone = channel === t.channelPhone;
  const contactLabel = isEmail ? t.labelContactEmail : isPhone ? t.labelContactPhone : t.labelContact(channel);
  const contactPlaceholder = isEmail ? t.placeholderContactEmail : isPhone ? t.placeholderContactPhone : t.placeholderContact;

  return (
    <main className="contact-screen">
      <header className="contact-toolbar">
        <button type="button" className="back-button" onClick={goBack} aria-label={t.backAria}>
          ‹
        </button>
        <span>{kicker} / 01</span>
        <Pixel />
      </header>

      <div className="request-content">
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <div className="request-price">
          {t.price}
          <small>{t.requestPriceSmall}</small>
        </div>
        {!prepared && (
          <div className="form-status" role="note">
            {t.formStatus}
          </div>
        )}

        {!prepared ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPrepared(true);
            }}
          >
            <label htmlFor="request-project">
              {t.labelProject}
              <select id="request-project" value={projectId} onChange={(e) => setProjectId(e.target.value)}>
                <option value="">{t.optionHelp}</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="form-row">
              <label htmlFor="request-name">
                {t.labelName}
                <input
                  id="request-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder={t.placeholderName}
                />
              </label>
              <label htmlFor="request-channel">
                {t.labelChannel}
                <select id="request-channel" value={channel} onChange={(e) => setChannel(e.target.value)}>
                  {channels.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label htmlFor="request-contact">
              {contactLabel}
              <input
                id="request-contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                type={isEmail ? 'email' : isPhone ? 'tel' : 'text'}
                autoComplete={isEmail ? 'email' : isPhone ? 'tel' : 'off'}
                required
                maxLength={180}
                placeholder={contactPlaceholder}
              />
            </label>

            <label htmlFor="request-task">
              {t.labelTask}
              <textarea
                id="request-task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                rows={4}
                maxLength={2000}
                placeholder={t.placeholderTask}
              />
            </label>

            <button type="submit" className="primary-cta form-submit">
              {t.submitRequest} ↗
            </button>
            <p className="form-help">{t.formHelp}</p>
          </form>
        ) : (
          <section className="request-confirmation" aria-live="polite">
            <span className="section-kicker">{t.confirmKicker}</span>
            <h2>{t.confirmTitle}</h2>
            <p className="not-sent">{t.confirmNotSent}</p>
            <dl>
              <div>
                <dt>{t.dtName}</dt>
                <dd>{name}</dd>
              </div>
              <div>
                <dt>
                  {t.dtContact} · {channel}
                </dt>
                <dd>{contact}</dd>
              </div>
              <div>
                <dt>{t.dtSite}</dt>
                <dd>{selected?.title || t.optionHelp}</dd>
              </div>
              <div>
                <dt>{t.dtTask}</dt>
                <dd>{task.trim() || '—'}</dd>
              </div>
              <div>
                <dt>{t.dtPrice}</dt>
                <dd>{t.priceStart}</dd>
              </div>
            </dl>
            <button type="button" className="outline-cta" onClick={() => setPrepared(false)}>
              {t.editRequest}
            </button>
          </section>
        )}

      </div>
    </main>
  );
};
