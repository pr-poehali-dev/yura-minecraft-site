import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const servers = [
  { id: 1, name: 'SkyBlock Legends', players: 1247, maxPlayers: 2000, status: 'online', type: 'Survival', map: { x: 30, y: 45 } },
  { id: 2, name: 'Creative Build Zone', players: 843, maxPlayers: 1500, status: 'online', type: 'Creative', map: { x: 65, y: 30 } },
  { id: 3, name: 'PvP Arena Masters', players: 512, maxPlayers: 1000, status: 'online', type: 'PvP', map: { x: 50, y: 70 } },
  { id: 4, name: 'Adventure Quest', players: 0, maxPlayers: 800, status: 'maintenance', type: 'Adventure', map: { x: 20, y: 60 } },
  { id: 5, name: 'Faction Wars', players: 1892, maxPlayers: 2500, status: 'online', type: 'Faction', map: { x: 75, y: 50 } },
  { id: 6, name: 'Mini-Games Hub', players: 634, maxPlayers: 1200, status: 'online', type: 'Minigames', map: { x: 40, y: 25 } },
];

const news = [
  { id: 1, title: 'Обновление 1.20 уже здесь!', date: '21 ноября 2025', category: 'Обновления' },
  { id: 2, title: 'Новый турнир PvP стартует в эту субботу', date: '20 ноября 2025', category: 'События' },
  { id: 3, title: 'Топ-10 модов ноября', date: '19 ноября 2025', category: 'Моды' },
];

const mods = [
  { name: 'OptiFine', downloads: '50M+', category: 'Оптимизация' },
  { name: 'JourneyMap', downloads: '25M+', category: 'Карты' },
  { name: 'Biomes O Plenty', downloads: '30M+', category: 'Миры' },
  { name: 'Applied Energistics', downloads: '20M+', category: 'Технологии' },
];

const builds = [
  { 
    id: 1, 
    title: 'Замок на горе', 
    author: 'SteveBuilder', 
    likes: 2847, 
    category: 'Средневековье',
    image: 'https://cdn.poehali.dev/projects/75e06282-f1e2-4b83-af1c-4c5e47fad7fe/files/0f8380b6-96c3-491e-b8c9-f9221a7205ef.jpg'
  },
  { 
    id: 2, 
    title: 'Киберпанк город', 
    author: 'Redstone_Pro', 
    likes: 3921, 
    category: 'Современность',
    image: 'https://cdn.poehali.dev/projects/75e06282-f1e2-4b83-af1c-4c5e47fad7fe/files/cc8022a6-f671-42a9-8606-2fab27d96c15.jpg'
  },
  { 
    id: 3, 
    title: 'Подводный храм', 
    author: 'AquaArchitect', 
    likes: 1567, 
    category: 'Фантастика',
    image: 'https://cdn.poehali.dev/projects/75e06282-f1e2-4b83-af1c-4c5e47fad7fe/files/f2f2af55-3e0a-4a02-934d-0824096d7ca9.jpg'
  },
];

export default function Index() {
  const [selectedServer, setSelectedServer] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('map');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary pixel-corners flex items-center justify-center">
                <Icon name="Blocks" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">CraftWorld</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#servers" className="text-foreground/80 hover:text-foreground transition-colors">Сервера</a>
              <a href="#community" className="text-foreground/80 hover:text-foreground transition-colors">Сообщество</a>
              <a href="#shop" className="text-foreground/80 hover:text-foreground transition-colors">Магазин</a>
              <a href="#forum" className="text-foreground/80 hover:text-foreground transition-colors">Форум</a>
              <a href="#news" className="text-foreground/80 hover:text-foreground transition-colors">Новости</a>
              <a href="#builds" className="text-foreground/80 hover:text-foreground transition-colors">Постройки</a>
              <a href="#mods" className="text-foreground/80 hover:text-foreground transition-colors">Моды</a>
            </div>
            <Button className="pixel-corners">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Твоё приключение начинается здесь
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Исследуй серверы, находи друзей, создавай свой мир
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="pixel-corners text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать игру
              </Button>
              <Button size="lg" variant="outline" className="pixel-corners text-lg px-8">
                <Icon name="Map" size={20} className="mr-2" />
                Карта серверов
              </Button>
            </div>
            <div className="mt-12 flex gap-8 justify-center text-center">
              <div>
                <div className="text-3xl font-bold text-primary">5,234</div>
                <div className="text-muted-foreground">Игроков онлайн</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">127</div>
                <div className="text-muted-foreground">Активных серверов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">1.2M+</div>
                <div className="text-muted-foreground">Сообщество</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servers" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Интерактивная карта серверов
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="map">
                <Icon name="Map" size={18} className="mr-2" />
                Карта
              </TabsTrigger>
              <TabsTrigger value="list">
                <Icon name="List" size={18} className="mr-2" />
                Список
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="map" className="space-y-6">
              <Card className="p-6 bg-card border-2 border-border">
                <div className="relative w-full h-[500px] bg-muted/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}>
                    {servers.map((server) => (
                      <button
                        key={server.id}
                        onClick={() => setSelectedServer(server.id)}
                        className={`absolute w-12 h-12 pixel-corners flex items-center justify-center transition-all hover:scale-110 cursor-pointer ${
                          server.status === 'online' ? 'bg-primary hover:bg-primary/80' : 'bg-muted hover:bg-muted/80'
                        } ${selectedServer === server.id ? 'scale-125 ring-4 ring-accent' : ''}`}
                        style={{ left: `${server.map.x}%`, top: `${server.map.y}%` }}
                      >
                        <Icon name="MapPin" size={24} className="text-primary-foreground" />
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {selectedServer && (
                <Card className="p-6 bg-card border-2 border-border animate-fade-in">
                  {servers.filter(s => s.id === selectedServer).map(server => (
                    <div key={server.id} className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{server.name}</h3>
                          <p className="text-muted-foreground">{server.type}</p>
                        </div>
                        <Badge variant={server.status === 'online' ? 'default' : 'secondary'} className="pixel-corners">
                          {server.status === 'online' ? 'Онлайн' : 'Техработы'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Users" size={16} className="text-muted-foreground" />
                          <span className="text-foreground">{server.players} / {server.maxPlayers}</span>
                        </div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button className="pixel-corners w-full">
                        <Icon name="Play" size={18} className="mr-2" />
                        Подключиться к серверу
                      </Button>
                    </div>
                  ))}
                </Card>
              )}
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              {servers.map((server) => (
                <Card key={server.id} className="p-6 bg-card border-2 border-border hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{server.name}</h3>
                        <Badge variant={server.status === 'online' ? 'default' : 'secondary'} className="pixel-corners">
                          {server.status === 'online' ? 'Онлайн' : 'Техработы'}
                        </Badge>
                        <Badge variant="outline" className="pixel-corners">{server.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Users" size={16} className="text-muted-foreground" />
                          <span className="text-foreground">{server.players} / {server.maxPlayers}</span>
                        </div>
                        <div className="flex-1 max-w-xs bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-full rounded-full"
                            style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Button className="pixel-corners">
                      <Icon name="Play" size={18} className="mr-2" />
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Последние новости</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="p-6 bg-card border-2 border-border hover:border-primary transition-all cursor-pointer group">
                <Badge className="pixel-corners mb-3">{item.category}</Badge>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Галерея построек</h2>
          <p className="text-center text-muted-foreground mb-12">Лучшие творения нашего сообщества</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <Card key={build.id} className="overflow-hidden bg-card border-2 border-border hover:border-accent transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={build.image} 
                    alt={build.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="pixel-corners bg-card/90 backdrop-blur-sm">{build.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {build.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="User" size={16} />
                      <span>{build.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Icon name="Heart" size={16} className="text-destructive" />
                      <span className="font-semibold">{build.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="pixel-corners">
              <Icon name="Image" size={18} className="mr-2" />
              Посмотреть всю галерею
            </Button>
          </div>
        </div>
      </section>

      <section id="mods" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Популярные моды</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mods.map((mod, idx) => (
              <Card key={idx} className="p-6 bg-card border-2 border-border hover:border-secondary transition-all cursor-pointer">
                <div className="w-12 h-12 bg-secondary pixel-corners flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-foreground">{mod.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{mod.category}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Download" size={14} className="text-muted-foreground" />
                  <span className="text-foreground">{mod.downloads}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-foreground">О нас</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">История</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Сообщество</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Wiki</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Помощь</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="pixel-corners">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="pixel-corners">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="pixel-corners">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t border-border">
            © 2025 CraftWorld. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}