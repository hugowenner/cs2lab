// src/components/AboutSection.jsx
import React from 'react';
import { TrendingUp, Award, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    // A classe 'bg-black/20' foi removida daqui para usar o fundo gradiente principal
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Linha de Separação: MOVIDA PARA FORA DO DIV DO TÍTULO E AGORA NO LOCAL CORRETO */}
        <div className="border-t border-white/40 my-10 max-w-4xl mx-auto" data-aos="fade-in" data-aos-delay="100"></div>

        {/* Título da Seção */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Minha Trajetória
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Da resolução de problemas à criação de soluções.
          </p>
        </div>

        

        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Coluna da Narrativa (Esquerda) */}
          <div className="md:col-span-3 space-y-6" data-aos="fade-right">
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha jornada na tecnologia é movida pela curiosidade e pelo desejo de transformar problemas complexos em soluções eficientes. Comecei no suporte técnico, onde aprendi a ouvir e a entender as dores reais dos usuários, atendendo mais de 3000 pessoas e garantindo a continuidade de suas operações.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Essa experiência na linha de frente foi a base para o meu próximo passo: não apenas resolver problemas, mas criar as ferramentas que os previnem. Hoje, como Tecnólogo em Análise e Desenvolvimento de Sistemas, com mais de <span className="text-blue-400 font-bold">315 horas</span> em certificações, meu foco é construir aplicações intuitivas, seguras e que gerem um impacto real.
            </p>
            <div className="flex items-start space-x-3 text-purple-400 pt-4">
              <Target size={24} className="mt-1 shrink-0" />
              <div>
                <span className="font-semibold text-xl">Meu Objetivo</span>
                <p className="text-gray-300">
                  Busco colaborar em projetos desafiadores onde eu possa aplicar minha paixão por código e análise para criar tecnologia que facilite a vida das pessoas e impulsione o crescimento de negócios.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna com Destaques Visuais (Direita) */}
          <div className="md:col-span-2 space-y-8" data-aos="fade-left" data-aos-delay="200">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
                <TrendingUp className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Da Resolução ao Desenvolvimento</h3>
                <p className="text-gray-400">Evolução de carreira focada em criar, não apenas consertar.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-3 rounded-lg">
                <Award className="text-green-400" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Foco em Qualidade e Certificação</h3>
                <p className="text-gray-400">Aprendizado contínuo como base para entregar o melhor resultado.</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 rounded-lg">
                <Zap className="text-orange-400" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Energia para Criar e Inovar</h3>
                <p className="text-gray-400">Paixão por transformar ideias em software funcional e elegante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;