import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "MessageCircle",
      title: "Продвижение в Telegram",
      description:
        "Создание и развитие телеграм-каналов артистов с максимальным охватом аудитории",
      features: ["Контент-стратегия", "Управление каналом", "Аналитика роста"],
    },
    {
      icon: "Users",
      title: "Управление фандомом",
      description:
        "Построение лояльного сообщества поклонников и организация фан-активности",
      features: ["Фан-клубы", "Эксклюзивный контент", "Мероприятия"],
    },
    {
      icon: "Zap",
      title: "Вирусный контент",
      description:
        "Создание трендового контента для максимального распространения",
      features: ["Мемы и тренды", "Челленджи", "Коллаборации"],
    },
    {
      icon: "BarChart",
      title: "Аналитика и отчетность",
      description:
        "Детальная аналитика роста популярности и эффективности промо-кампаний",
      features: ["Статистика охвата", "Анализ аудитории", "ROI отчеты"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-800/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Наши <span className="text-purple-400">Услуги</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Полный спектр услуг по продвижению артистов в цифровом пространстве
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <Icon name="Check" className="h-4 w-4 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
