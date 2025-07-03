import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArtistsSection: React.FC = () => {
  const artists = [
    {
      name: "STELLAR NOVA",
      type: "Girl Group",
      members: 4,
      followers: "2.5M",
      image: "/placeholder.svg",
      tags: ["K-Pop", "Dance", "Vocal"],
      status: "Active",
    },
    {
      name: "COSMIC BOYS",
      type: "Boy Group",
      members: 7,
      followers: "3.2M",
      image: "/placeholder.svg",
      tags: ["K-Pop", "Hip-Hop", "Performance"],
      status: "Active",
    },
    {
      name: "LUNA SOLOIST",
      type: "Solo Artist",
      members: 1,
      followers: "1.8M",
      image: "/placeholder.svg",
      tags: ["Ballad", "R&B", "OST"],
      status: "Active",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Наши <span className="text-purple-400">Артисты</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Знакомьтесь с талантливыми артистами STARSHIP Entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Music" className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-white">
                  {artist.name}
                </CardTitle>
                <p className="text-purple-300">{artist.type}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Участники:</span>
                    <span className="text-white">{artist.members}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Подписчики:</span>
                    <span className="text-white">{artist.followers}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {artist.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                    size="sm"
                  >
                    <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            <Icon name="Plus" className="mr-2 h-5 w-5" />
            Все артисты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
