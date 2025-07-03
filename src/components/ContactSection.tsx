import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "Telegram",
      description: "Основной канал связи",
      contact: "@starship_ent",
      action: "Написать",
    },
    {
      icon: "Mail",
      title: "Email",
      description: "Для деловых предложений",
      contact: "info@starship.ent",
      action: "Отправить",
    },
    {
      icon: "Phone",
      title: "Консультация",
      description: "Бесплатная консультация",
      contact: "Заказать звонок",
      action: "Заказать",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Связаться с <span className="text-purple-400">нами</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы обсудить продвижение вашего артиста? Выберите удобный способ
            связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={method.icon as any}
                    className="h-8 w-8 text-white"
                  />
                </div>
                <CardTitle className="text-xl text-white">
                  {method.title}
                </CardTitle>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300 font-medium mb-4">
                  {method.contact}
                </p>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="sm"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-slate-800/30 border-slate-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Готовы к запуску?
              </h3>
              <p className="text-gray-300 mb-6">
                Присоединяйтесь к STARSHIP Entertainment и начните путь к
                звездному успеху
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                >
                  <Icon name="Rocket" className="mr-2 h-5 w-5" />
                  Подать заявку
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8"
                >
                  <Icon name="Download" className="mr-2 h-5 w-5" />
                  Скачать презентацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
