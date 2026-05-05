<h1 align="center">
  <br>
  Knot
  <br>
</h1>

<h4 align="center">A production-grade, real-time group chat application built for scale.</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Socket.io-4-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
  <img src="https://img.shields.io/badge/PostgreSQL-Prisma-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Redis-Pub%2FSub-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/Apache_Kafka-Message_Broker-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white" alt="Kafka" />
  <img src="https://img.shields.io/badge/NextAuth.js-Google_OAuth-FF4B4B?style=for-the-badge&logo=nextauth.js&logoColor=white" alt="NextAuth.js" />
</p>

## 🎬 Demo

<p align="center">
  <a href="https://youtu.be/bzbaCTceSzk">
    <img src="https://img.youtube.com/vi/bzbaCTceSzk/hqdefault.jpg" alt="Watch Knot in action" />
  </a>
</p>

---


  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-features">Features</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-database-schema">Database Schema</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-environment-variables">Environment Variables</a> •
  <a href="#-user-flow">User Flow</a>
</p>

---

## 📖 Overview

**Knot** is a scalable, real-time group chat application that demonstrates production-level backend architecture. Users authenticate with Google, create passcode-protected chat groups, share invite links, and communicate instantly — all powered by a multi-layered infrastructure designed to handle high concurrency and large message volumes without compromising reliability.

The project showcases how to architect real-time systems that scale beyond a single server instance by combining **Socket.io** for live connections, **Redis** as a pub/sub adapter to synchronize events across server replicas, and **Kafka** as a high-throughput message broker to handle persistent message streaming.

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router for routing and SSR |
| **TypeScript** | Type-safe development across the entire frontend |
| **Tailwind CSS** | Utility-first CSS for rapid, responsive UI development |
| **shadcn/ui** | Headless, accessible component library (Radix UI primitives) |
| **NextAuth.js v4** | Authentication with Google OAuth and secure session management |
| **Socket.io Client** | WebSocket-based real-time messaging on the client side |
| **React Hook Form + Zod** | Form management with schema-based runtime validation |
| **Axios** | HTTP client for communicating with the backend REST API |
| **Sonner** | Elegant, non-blocking toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | HTTP server and REST API layer |
| **TypeScript** | Type-safe server-side development |
| **Socket.io v4** | Real-time, bidirectional WebSocket communication |
| **Prisma ORM** | Type-safe database client for PostgreSQL |
| **PostgreSQL** | Relational database for persistent user and chat data |
| **Redis (ioredis)** | Pub/sub adapter to broadcast Socket.io events across instances |
| **Kafka (kafkajs + @upstash/kafka)** | High-throughput message broker for reliable message streaming |
| **bcrypt** | Secure password/passcode hashing |
| **jsonwebtoken** | JWT-based token verification |
| **@socket.io/admin-ui** | Built-in Socket.io admin dashboard for monitoring connections |

---

## 🏗 Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                      │
│              Next.js 14 + TypeScript + Tailwind CSS           │
│         NextAuth.js (Google OAuth) · Socket.io Client         │
└────────────────────────────┬──────────────────────────────────┘
                             │  REST + WebSocket
         ┌───────────────────┴───────────────────┐
         │                                       │
         ▼                                       ▼
┌─────────────────┐                   ┌─────────────────┐
│  Express API    │                   │  Express API    │
│  Instance #1    │                   │  Instance #2    │
│  (Socket.io)   │◄──── Redis Pub/Sub ────►(Socket.io) │
└────────┬────────┘   (Sync Events)   └────────┬────────┘
         │                                       │
         └───────────────┬───────────────────────┘
                         │
                         ▼
               ┌──────────────────┐
               │   Apache Kafka   │  ← Message Broker
               │ (Message Stream) │    High-throughput,
               └────────┬─────────┘    fault-tolerant
                        │
                        ▼
               ┌──────────────────┐
               │   PostgreSQL     │  ← Persistent Storage
               │   (via Prisma)   │    Users, Groups, Chats
               └──────────────────┘
```

### How the Pieces Fit Together

1. **Client → Express API**: All REST operations (creating groups, fetching chats, joining groups) go through a standard Express HTTP API.
2. **Client → Socket.io**: The browser opens a persistent WebSocket connection to Socket.io for real-time messaging.
3. **Redis Pub/Sub (Horizontal Scaling)**: When the app is deployed across multiple server instances, Socket.io alone cannot broadcast events between instances. Redis acts as a shared message bus — when a message arrives at Instance #1, Redis ensures all other Socket.io server instances (e.g., Instance #2) also broadcast it to their connected clients.
4. **Kafka (Reliable Message Streaming)**: Instead of writing every chat message directly to PostgreSQL on each Socket.io event (a bottleneck at scale), messages are first pushed to a Kafka topic. A Kafka consumer then processes messages from the topic and writes them to the database in a controlled, reliable stream. This decouples message receipt from database writes and prevents data loss during traffic spikes.

---

## ✨ Features

- 🔐 **Google OAuth Authentication** — Secure, one-click sign-in via NextAuth.js with no passwords to manage.
- 🏠 **User Dashboard** — A clean personal dashboard to create and manage your chat groups.
- 🛡️ **Passcode-Protected Groups** — Each chat group is secured with a custom passcode set by the creator, ensuring only authorized participants can join.
- 🔗 **Shareable Invite Links** — Auto-generated group links that can be shared to invite others. Recipients must enter both a display name and the group passcode to gain access.
- ⚡ **Real-Time Messaging** — Instant message delivery via Socket.io WebSockets. No page refreshes required.
- 📜 **Persistent Chat History** — All messages are stored in PostgreSQL and loaded when users (re)join a group.
- 📌 **Auto-Scroll to Latest** — The chat window automatically scrolls to the most recent message so users never miss anything.
- 🔵 **Sender/Receiver Distinction** — Messages are visually styled differently depending on whether they were sent by the current user or another participant.
- 📡 **Horizontally Scalable** — Redis pub/sub adapter ensures the system remains consistent across multiple backend server replicas.
- 🚀 **Kafka Message Pipeline** — High-volume message streaming ensures the system can handle a large, concurrent user base reliably.
- 🖥️ **Socket.io Admin UI** — Built-in admin dashboard for monitoring active socket connections during development.

---

## 📁 Project Structure

```
quick_chat-main/
├── front/                          # Next.js Frontend
│   ├── src/
│   │   ├── app/                    # App Router pages & layouts
│   │   │   ├── api/                # Next.js API routes (NextAuth handler)
│   │   │   ├── auth/               # Authentication pages (sign-in)
│   │   │   ├── chat/               # Chat room UI
│   │   │   ├── dashboard/          # User dashboard
│   │   │   ├── layout.tsx          # Root layout
│   │   │   └── page.tsx            # Landing page
│   │   ├── actions/                # Next.js server actions
│   │   ├── components/             # Reusable UI components (shadcn/ui)
│   │   ├── fetch/                  # Axios API call wrappers
│   │   ├── lib/                    # Utility helpers (cn, auth config)
│   │   ├── providers/              # React context providers
│   │   ├── validations/            # Zod validation schemas
│   │   └── middleware.ts           # NextAuth route protection middleware
│   ├── .env                        # Frontend environment variables
│   ├── components.json             # shadcn/ui configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── package.json
│
└── server/                         # Express Backend
    ├── src/
    │   ├── config/
    │   │   ├── kafka.config.ts     # Kafka producer/consumer setup
    │   │   └── redis.ts            # Redis client configuration
    │   ├── controllers/            # Express route handler logic
    │   ├── middleware/             # Express middleware (auth, validation)
    │   ├── routes/                 # API route definitions
    │   ├── socket.ts               # Socket.io event handlers
    │   ├── helper.ts               # Kafka consumer & message processor
    │   └── index.ts                # Server entry point
    ├── prisma/
    │   ├── schema.prisma           # Database schema
    │   └── migrations/             # Prisma migration history
    ├── .env                        # Backend environment variables
    └── package.json
```

---

## 🗄 Database Schema

The PostgreSQL database is managed entirely through Prisma ORM with the following models:

```prisma
model User {
  id         Int         @id @default(autoincrement())
  name       String
  email      String      @unique
  provider   String      // OAuth provider (e.g., "google")
  oauth_id   String      // Provider-specific user ID
  image      String?     // Profile picture URL
  created_at DateTime    @default(now())
  ChatGroup  ChatGroup[]
}

model ChatGroup {
  id         String       @id @default(uuid())
  user_id    Int          // Owner of the group
  title      String
  passcode   String       // Hashed passcode for access control
  created_at DateTime     @default(now())
  Chats      Chats[]
  GroupUsers GroupUsers[]
}

model GroupUsers {
  id         Int       @id @default(autoincrement())
  group_id   String
  name       String    // Display name chosen when joining
  created_at DateTime  @default(now())
}

model Chats {
  id         String    @id @default(uuid())
  group_id   String
  message    String?
  name       String    // Sender's display name
  file       String?   // Optional file attachment
  created_at DateTime  @default(now())
}
```

**Key design decisions:**
- `ChatGroup.passcode` is hashed with bcrypt before storage.
- `Chats` and `ChatGroup` have `created_at` indices for efficient time-ordered queries.
- Cascading deletes ensure that removing a group also removes all associated chats and group users.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed and configured:

- **Node.js** v18+
- **npm** or **yarn**
- A running **PostgreSQL** database
- A running **Redis** instance (local or cloud, e.g., Upstash)
- A **Kafka** cluster (local or cloud, e.g., Upstash Kafka)
- A **Google Cloud** project with OAuth 2.0 credentials

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/knot-app.git
cd knot-app
```

### 2. Install Dependencies

Install dependencies for both the frontend and backend separately:

```bash
# Install frontend dependencies
cd front
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3. Configure Environment Variables

Create `.env` files for both the `front` and `server` directories. See the [Environment Variables](#-environment-variables) section below for the full list of required variables.

### 4. Set Up the Database

Run Prisma migrations to create all necessary database tables:

```bash
cd server
npx prisma migrate deploy
```

To also generate the Prisma client:

```bash
npx prisma generate
```

You can explore your database via Prisma Studio:

```bash
npx prisma studio
```

### 5. Run the Application

Open two separate terminal windows and start both servers:

**Terminal 1 — Backend Server:**
```bash
cd server
npm run dev
# Server runs on http://localhost:8000
```

**Terminal 2 — Frontend:**
```bash
cd front
npm run dev
# App runs on http://localhost:3000
```

---

## 🔑 Environment Variables

### Frontend (`front/.env`)

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Backend API URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend (`server/.env`)

```env
# Server
PORT=8000
CLIENT_APP_URL=http://localhost:3000

# PostgreSQL (Prisma)
DATABASE_URL=postgresql://user:password@localhost:5432/knot_db

# Redis
REDIS_URL=redis://localhost:6379
# Or for Upstash:
# REDIS_URL=rediss://:your_password@your-endpoint.upstash.io:6380

# Kafka (Upstash or self-hosted)
KAFKA_BROKER=your_kafka_broker_url
KAFKA_USERNAME=your_kafka_username
KAFKA_PASSWORD=your_kafka_password
KAFKA_TOPIC=knot-messages

# JWT (for custom token verification if used)
JWT_SECRET=your_jwt_secret_here
```

> **Note:** Never commit `.env` files to version control. Both `front/.env` and `server/.env` are already listed in their respective `.gitignore` files.

---

## 🗺 User Flow

```
1. Landing Page
   └── User visits the app and clicks "Get Started"

2. Authentication
   └── Redirected to Google OAuth sign-in via NextAuth.js
       └── On success → redirected to Dashboard

3. Dashboard
   ├── [Create Group] → User provides a group title and a custom passcode
   │                  → System generates a unique shareable group link (UUID-based)
   └── [View Groups]  → Lists all groups the user owns

4. Sharing & Joining
   └── Owner shares the group link with others
       └── Visitor opens the link → prompted for:
           ├── Display Name (what others will see in chat)
           └── Group Passcode (must match the owner's passcode)
               └── On success → enter the chat room

5. Real-Time Chat
   ├── User sends a message → emitted via Socket.io
   ├── Message pushed to Kafka topic
   ├── Kafka consumer reads the topic → writes to PostgreSQL
   ├── Socket.io broadcasts the event to all group members
   │   (across server instances via Redis pub/sub)
   └── All clients render the new message instantly
       └── Chat window auto-scrolls to the latest message
```

---

## 🌐 Deployment

### Frontend — Vercel

The Next.js frontend is optimized for deployment on [Vercel](https://vercel.com). Set all `front/.env` variables as environment variables in your Vercel project settings.

```bash
# Production build
cd front
npm run build
```

### Backend — Render / Railway / Fly.io

The Express backend can be deployed to any Node.js-compatible hosting platform. Set all `server/.env` variables in your hosting platform's environment config.

```bash
# Production start
cd server
npm run build
npm start
```

> **Important:** When deploying multiple backend instances for horizontal scaling, all instances **must** share the same Redis and Kafka configurations. The Redis adapter is what keeps Socket.io in sync across replicas.

---

## 🔧 Available Scripts

### Frontend (`front/`)
| Command | Description |
|---|---|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

### Backend (`server/`)
| Command | Description |
|---|---|
| `npm run dev` | Compile TypeScript in watch mode + run nodemon concurrently |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Start the compiled production server |
| `npm run watch` | TypeScript compiler in watch mode only |
| `npm run server` | Run nodemon on the compiled output only |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request.

Please follow the existing code style and ensure all TypeScript types are properly defined.

---

<p align="center">Built with ❤️ using Next.js, Socket.io, Redis, and Kafka</p>
