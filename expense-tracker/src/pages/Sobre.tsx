import React from "react";
import "../styles/about.css";

const Sobre: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre o Expense Tracker</h1>
      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">Nossa Missão</h2>
          <p>
            Nosso objetivo é fornecer uma ferramenta simples e eficaz para
            ajudar as pessoas a gerenciar suas finanças pessoais, promovendo uma
            vida financeira mais saudável e organizada.
          </p>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Recursos Principais</h2>
          <ul className="feature-list">
            <li>Rastreamento detalhado de despesas e receitas</li>
            <li>Categorização inteligente de transações</li>
            <li>Visualizações gráficas para análise financeira</li>
            <li>Definição de metas e orçamentos</li>
            <li>Relatórios personalizados</li>
          </ul>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Nossa Equipe</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="gabrielcanci.jpeg"
                alt="Membro 1"
                className="team-member-image"
              />
              <h3 className="team-member-name">Gabriel Canci</h3>
              <p className="team-member-role">Desenvolvedor Full-Stack</p>
            </div>
          </div>
        </section>
        <section className="about-section">
          <h2 className="about-section-title">Contato</h2>
          <p>Tem alguma dúvida ou sugestão? Entre em contato conosco:</p>
          <a
            href="mailto:contato@expensetracker.com"
            className="contact-button"
          >
            Enviar E-mail
          </a>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
