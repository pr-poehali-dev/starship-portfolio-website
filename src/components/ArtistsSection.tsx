import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ArtistsSection: React.FC = () => {
  const artists = [
    {
      name: "ASTRAL",
      type: "Girl Group",
      members: 5,
      followers: "2.8M",
      image:
        "https://i.pinimg.com/736x/d7/8d/77/d78d77c3f5b7a8d2f3d6a9b3f8c9a7b2.jpg",
      tags: ["K-Pop", "Dance", "Vocal"],
      status: "Active",
      link: "https://t.me/ASTRALSHIP",
    },
    {
      name: "BLADY",
      type: "Girl Group",
      members: 3,
      followers: "1.9M",
      image:
        "https://i.pinimg.com/736x/a3/2f/8e/a32f8e6c7b9d4f1e2a5c6d8b3f9e2a1c.jpg",
      tags: ["K-Pop", "R&B", "Performance"],
      status: "Active",
      link: "https://t.me/BLADYSTARSH",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.className =
                        "w-full h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="text-white text-center"><svg class="h-12 w-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg><p class="text-sm">' +
                        artist.name +
                        "</p></div>";
                    }}
                  />
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
                    onClick={() =>
                      artist.link && window.open(artist.link, "_blank")
                    }
                    disabled={!artist.link}
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
