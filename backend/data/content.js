const owners = [
  {
    id: 1,
    name: "Nexus",
    tag: "nexus.dev",
    role: "Founder & Lead Developer",
    bio: "The mind behind DELTA MUSIC. Full-stack engineer obsessed with audio technology and Discord bot architecture.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=nexus&backgroundColor=0d1117",
    badge: "Owner",
    socials: { github: "https://github.com", discord: "https://discord.com" },
    order: 0
  },
  {
    id: 2,
    name: "Zara",
    tag: "zara.codes",
    role: "Co-Owner & Backend Engineer",
    bio: "Backend architect ensuring DELTA MUSIC operates at 99.97% uptime. Infrastructure and performance specialist.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=zara&backgroundColor=0d1117",
    badge: "Co-Owner",
    socials: { github: "https://github.com", twitter: "https://twitter.com" },
    order: 1
  },
  {
    id: 3,
    name: "Orion",
    tag: "orion.dev",
    role: "Core Developer",
    bio: "Audio processing guru. Responsible for DELTA MUSIC's filter engine and low-latency streaming pipeline.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=orion&backgroundColor=0d1117",
    badge: "Developer",
    socials: { github: "https://github.com" },
    order: 2
  },
  {
    id: 4,
    name: "Luna",
    tag: "luna.design",
    role: "Frontend & Design Lead",
    bio: "Crafts the visual identity of DELTA MUSIC. UI/UX designer and frontend developer with a passion for clean interfaces.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=luna&backgroundColor=0d1117",
    badge: "Developer",
    socials: { github: "https://github.com", website: "https://example.com" },
    order: 3
  }
];

const partners = [
  {
    id: 1,
    name: "HarmonyBot",
    description: "A feature-rich multi-purpose Discord bot with moderation, economy, leveling, and fun commands for any server.",
    logo: "https://api.dicebear.com/9.x/bottts/svg?seed=harmonybot",
    inviteLink: "https://discord.com",
    type: "Bot",
    members: "50K+ servers",
    verified: true,
    featured: true,
    order: 0
  },
  {
    id: 2,
    name: "Aurora Community",
    description: "A thriving Discord hub for music producers, beatmakers, and audiophiles to share, collaborate, and grow.",
    logo: "https://api.dicebear.com/9.x/identicon/svg?seed=aurora",
    inviteLink: "https://discord.com",
    type: "Server",
    members: "28K members",
    verified: true,
    featured: true,
    order: 1
  },
  {
    id: 3,
    name: "SoundWave CDN",
    description: "Enterprise-grade audio hosting and CDN delivery service powering music bots across Discord.",
    logo: "https://api.dicebear.com/9.x/bottts/svg?seed=soundwave",
    inviteLink: "https://discord.com",
    website: "https://example.com",
    type: "Service",
    members: "Infrastructure partner",
    verified: true,
    featured: false,
    order: 2
  },
  {
    id: 4,
    name: "NexusGuard",
    description: "Advanced anti-raid and security bot protecting thousands of Discord servers worldwide from threats.",
    logo: "https://api.dicebear.com/9.x/bottts/svg?seed=nexusguard",
    inviteLink: "https://discord.com",
    type: "Bot",
    members: "80K+ servers",
    verified: true,
    featured: false,
    order: 3
  },
  {
    id: 5,
    name: "Melodic Hub",
    description: "Community server dedicated to music discovery, playlist sharing, and connecting music lovers globally.",
    logo: "https://api.dicebear.com/9.x/identicon/svg?seed=melodic",
    inviteLink: "https://discord.com",
    type: "Server",
    members: "18K members",
    verified: false,
    featured: false,
    order: 4
  },
  {
    id: 6,
    name: "HostFlow",
    description: "High-performance cloud hosting provider optimized for Discord bots with 24/7 support and 99.9% SLA.",
    logo: "https://api.dicebear.com/9.x/bottts/svg?seed=hostflow",
    inviteLink: "https://discord.com",
    website: "https://example.com",
    type: "Service",
    members: "Hosting partner",
    verified: true,
    featured: false,
    order: 5
  }
];

const features = [
  { id: 1, title: "Crystal Clear Audio", description: "Stream music at the highest bitrate available with zero compression. Every note, every beat — pristine.", icon: "🎵", category: "Audio", premium: false, isNew: false, order: 0 },
  { id: 2, title: "6-Source Playback", description: "Play from YouTube, Spotify, SoundCloud, Apple Music, Deezer, and Tidal — all through one bot.", icon: "🌐", category: "Playback", premium: false, isNew: false, order: 1 },
  { id: 3, title: "24/7 Uptime", description: "DELTA MUSIC never sleeps. Keep your server's music playing non-stop with dedicated always-on mode.", icon: "⏰", category: "Reliability", premium: false, isNew: false, order: 2 },
  { id: 4, title: "Advanced Audio Filters", description: "Bass boost, Nightcore, Vaporwave, 8D spatial audio, 10-band EQ and 15+ more studio-grade filters.", icon: "🎛️", category: "Audio", premium: false, isNew: false, order: 3 },
  { id: 5, title: "Personal Playlists", description: "Save unlimited personal playlists synced to your account across every server DELTA MUSIC joins.", icon: "📋", category: "Playlists", premium: false, isNew: false, order: 4 },
  { id: 6, title: "Real-Time Lyrics", description: "Synchronized lyrics that scroll in real-time for any playing track, sourced from multiple providers.", icon: "📝", category: "Extras", premium: true, isNew: false, order: 5 },
  { id: 7, title: "DJ Role System", description: "Fine-grained permission controls. Assign DJ roles to manage who can skip, stop, or change the volume.", icon: "🎤", category: "Control", premium: false, isNew: false, order: 6 },
  { id: 8, title: "Queue Management", description: "Reorder, remove, move, and manage a queue of up to 1,000 songs with intuitive slash commands.", icon: "📊", category: "Playback", premium: false, isNew: false, order: 7 },
  { id: 9, title: "Spotify Integration", description: "Import entire Spotify playlists, albums, liked songs, and artists directly into your queue.", icon: "💚", category: "Playback", premium: false, isNew: true, order: 8 },
  { id: 10, title: "Multi-Region Servers", description: "Hosted across AWS regions worldwide. Automatic routing to the nearest server for minimal latency.", icon: "⚡", category: "Reliability", premium: false, isNew: false, order: 9 },
  { id: 11, title: "Vote Skip System", description: "Democratic music management — let your community vote to skip tracks they're not feeling.", icon: "🗳️", category: "Control", premium: false, isNew: false, order: 10 },
  { id: 12, title: "AutoPlay Mode", description: "When the queue ends, DELTA MUSIC automatically discovers and queues similar songs to keep the vibe alive.", icon: "🔀", category: "Playback", premium: false, isNew: true, order: 11 }
];

module.exports = { owners, partners, features };
