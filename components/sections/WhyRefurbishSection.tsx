"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Banknote,
  Zap,
  Clock,
  Leaf,
  TrendingUp,
  Wrench,
  Target,
  Lightbulb,
  CheckCircle,
  Award,
} from "lucide-react";

const reasons = [
  {
    number: 1,
    title: "Economia Significativa",
    description:
      "A reforma pode reduzir os custos em comparação com a aquisição de um equipamento novo, liberando recursos para outros investimentos estratégicos da empresa.",
    icon: Banknote,
  },
  {
    number: 2,
    title: "Mesmo Desempenho Operacional",
    description:
      "Quando realizada com processos padronizados, componentes de qualidade e testes rigorosos, a reforma devolve ao equipamento desempenho e confiabilidade equivalentes aos de um componente novo.",
    icon: Zap,
  },
  {
    number: 3,
    title: "Menor Prazo de Entrega",
    description:
      "Na maioria dos casos, reformar é muito mais rápido do que comprar um equipamento novo, especialmente quando há fabricação sob encomenda ou dependência de importações.",
    icon: Clock,
  },
  {
    number: 4,
    title: "Redução do Tempo de Parada",
    description:
      "Quanto menor o tempo de espera, menor o impacto na produção. A reforma contribui para reduzir perdas causadas pela indisponibilidade dos equipamentos.",
    icon: TrendingUp,
  },
  {
    number: 5,
    title: "Aproveitamento da Estrutura Original",
    description:
      "Grande parte dos componentes possui uma estrutura mecânica robusta. A reforma substitui apenas os elementos sujeitos ao desgaste, preservando o que ainda está em perfeitas condições.",
    icon: Wrench,
  },
  {
    number: 6,
    title: "Sustentabilidade e Responsabilidade Ambiental",
    description:
      "Reformar reduz o descarte de materiais, diminui o consumo de matérias-primas e contribui para uma operação mais sustentável, alinhada às práticas ambientais exigidas pelo mercado.",
    icon: Leaf,
  },
  {
    number: 7,
    title: "Melhor Relação Custo-Benefício",
    description:
      "O investimento é menor, o retorno é mais rápido e a vida útil do equipamento é ampliada, proporcionando excelente rentabilidade sobre o capital investido.",
    icon: Award,
  },
  {
    number: 8,
    title: "Possibilidade de Melhorias",
    description:
      "Durante a reforma, podem ser incorporadas melhorias de projeto, novos materiais, vedações mais eficientes ou adaptações que aumentem a durabilidade e o desempenho do equipamento.",
    icon: Lightbulb,
  },
  {
    number: 9,
    title: "Maior Previsibilidade de Manutenção",
    description:
      "A inspeção completa realizada durante a reforma permite identificar desgastes e falhas antes que provoquem paradas inesperadas, aumentando a confiabilidade da operação.",
    icon: Target,
  },
  {
    number: 10,
    title: "Decisão Inteligente para Gestão de Ativos",
    description:
      "Reformar prolonga a vida útil dos ativos industriais, reduz o custo total de propriedade (TCO) e melhora o aproveitamento dos investimentos já realizados pela empresa.",
    icon: CheckCircle,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyRefurbishSection() {
  return (
    <section className="py-16 md:py-20 bg-dark-50">
      <Container>
        <SectionTitle
          title="Por que Reformar?"
          centered={true}
        />

        <motion.div
          className="mb-16 max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl border border-primary-200 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-4">
            POR QUE REFORMAR AO INVÉS DE COMPRAR UM NOVO COMPONENTE?
          </h3>
          <p className="text-dark-700 leading-relaxed mb-4">
            Essa é uma das decisões mais importantes para um gestor de
            manutenção. Na verdade, reformar não é apenas uma economia, mas uma
            decisão técnica, financeira e ambiental que pode trazer o mesmo
            desempenho de um componente novo quando executada por uma empresa
            especializada.
          </p>
          <p className="text-dark-700 leading-relaxed font-semibold text-primary-700">
            Listamos 10 motivos para escolher a reforma de componentes
            industriais
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.number}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full border-l-4 border-l-primary-500 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-500 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold flex-shrink-0 mt-0.5">
                          {reason.number}
                        </span>
                        <h4 className="text-lg font-bold text-dark-900">
                          {reason.title}
                        </h4>
                      </div>
                      <p className="mt-3 text-dark-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
