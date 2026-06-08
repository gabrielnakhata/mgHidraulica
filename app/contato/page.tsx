"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContatoPage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus("loading");

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contato@mghidraulica.com.br",
    },
    {
      icon: "📱",
      title: "Telefone",
      value: "+55 (31) XXXX-XXXX",
    },
    {
      icon: "📍",
      title: "Localização",
      value: "Betim, Minas Gerais",
    },
  ];

  const services = [
    "Cilindros Hidráulicos",
    "Bombas Hidráulicas",
    "Motoredutores",
    "Usinagem",
    "Caldeiraria",
    "Recuperação de Componentes",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_35%)]" />

          <Container className="relative py-16 text-center md:py-24">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              Atendimento técnico especializado
            </span>

            <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Entre em contato com a MG Hidráulica
            </h1>

            <p className="mx-auto max-w-2xl text-base text-dark-100 md:text-xl">
              Solicite um orçamento, tire dúvidas ou fale com nossa equipe
              sobre soluções em hidráulica, pneumática, usinagem e caldeiraria.
            </p>
          </Container>
        </section>

        {/* Conteúdo principal */}
        <section className="bg-dark-50 py-12 md:py-20">
          <Container>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
              {/* Coluna de informações */}
              <aside className="space-y-6 lg:sticky lg:top-28">
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-dark-900 md:text-4xl">
                    Fale Conosco
                  </h2>

                  <p className="text-dark-600">
                    Estamos prontos para atender suas necessidades industriais.
                    Nossa equipe retornará o contato em breve.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card
                      key={info.title}
                      className="flex items-start gap-4 border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-2xl">
                        {info.icon}
                      </div>

                      <div>
                        <h3 className="font-bold text-dark-900">
                          {info.title}
                        </h3>
                        <p className="text-sm text-dark-600">{info.value}</p>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 bg-primary-600 text-white shadow-md">
                  <h3 className="mb-2 text-xl font-bold">
                    Precisa de atendimento rápido?
                  </h3>

                  <p className="mb-5 text-sm text-white/90">
                    Fale diretamente com nossa equipe comercial e solicite seu
                    orçamento.
                  </p>

                  <a
                    href="https://wa.me/5531000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary-700 transition hover:bg-dark-50"
                  >
                    Chamar no WhatsApp
                  </a>
                </Card>
              </aside>

              {/* Formulário */}
              <Card className="border-0 shadow-xl lg:col-span-2">
                <div className="mb-8">
                  <span className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                    Solicitação de orçamento
                  </span>

                  <h2 className="mb-2 text-2xl font-bold text-dark-900 md:text-3xl">
                    Conte-nos sobre sua necessidade
                  </h2>

                  <p className="text-dark-600">
                    Preencha os dados abaixo para que possamos entender melhor
                    sua demanda e retornar com a melhor solução.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-dark-900"
                      >
                        Nome Completo *
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        className="w-full rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        disabled={submitStatus === "loading"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-dark-900"
                      >
                        Empresa *
                      </label>
                      <input
                        {...register("company")}
                        id="company"
                        type="text"
                        placeholder="Nome da empresa"
                        className="w-full rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        disabled={submitStatus === "loading"}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-dark-900"
                      >
                        Telefone *
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="(31) 9XXXX-XXXX"
                        className="w-full rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        disabled={submitStatus === "loading"}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-dark-900"
                      >
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                        disabled={submitStatus === "loading"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-dark-900"
                    >
                      Serviço de Interesse *
                    </label>
                    <select
                      {...register("service")}
                      id="service"
                      className="w-full rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      disabled={submitStatus === "loading"}
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-dark-900"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      placeholder="Descreva sua necessidade..."
                      rows={5}
                      className="w-full resize-none rounded-lg border border-dark-300 px-4 py-3 transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                      disabled={submitStatus === "loading"}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                      ✓ Formulário enviado com sucesso! Retornaremos em breve.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                      ✗ Erro ao enviar formulário. Por favor, tente novamente.
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                    <Button
                      type="submit"
                      className="w-full px-10 sm:w-auto"
                      disabled={submitStatus === "loading"}
                    >
                      {submitStatus === "loading"
                        ? "Enviando..."
                        : "Solicitar Orçamento"}
                    </Button>

                    <p className="text-sm text-dark-500">
                      Responderemos assim que possível.
                    </p>
                  </div>
                </form>
              </Card>
            </div>
          </Container>
        </section>

        {/* Localização */}
        <section className="bg-white py-12 md:py-20">
          <Container>
            <div className="mb-8 text-center">
              <span className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                Onde estamos
              </span>

              <h2 className="mb-3 text-3xl font-bold text-dark-900 md:text-4xl">
                Localização
              </h2>

              <p className="mx-auto max-w-2xl text-dark-600">
                Estamos localizados em Betim, Minas Gerais, em uma região
                estratégica para atendimento industrial.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-dark-100 shadow-lg">
              <iframe
                title="Localização MG Hidráulica"
                src="https://www.google.com/maps?q=MG%20Hidr%C3%A1ulica%20Betim%20MG&z=16&output=embed"
                className="h-[320px] w-full md:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MG%20Hidr%C3%A1ulica%20Betim%20MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-primary-600 px-5 py-3 text-sm font-bold text-primary-700 transition hover:bg-primary-600 hover:text-white"
              >
                Abrir no Google Maps
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}