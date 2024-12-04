# 💬 Real-Time Chat Application  

🚀 **Live Demo**: [Chat App](https://chat-app-omega-azure.vercel.app/)  

## 🌟 Features  

### ⚡ Real-Time Communication  
- Real-time messaging powered by **Pusher** with read receipts.  
- Online/offline status indicators.  
- Support for **group chats** and **one-on-one messaging**.  

### 🖌️ Seamless User Experience  
- Sleek, responsive UI designed with **Tailwind CSS** and enriched with animations and transitions.  
- User authentication with **NextAuth** using **Google** and **GitHub** login.  

### 📂 Advanced Media Sharing  
- File and image uploads handled via **Cloudinary**.  
- Customizable user profiles and settings.  
- Chat room and channel creation/management.  

## 🚀 Technology Stack  
- **Frontend**: Next.js, React, Tailwind CSS, React Hook Form.  
- **Backend**: Next.js API Routes, Prisma, Pusher.  
- **Authentication**: NextAuth with Google and GitHub providers.  
- **Media Management**: Cloudinary CDN.  
- **Notifications**: React Toast.  

## 🌐 Deployment  
- Deployed on **Vercel** for fast and reliable hosting.  

## 🛠️ Getting Started  

### Prerequisites  
- Node.js (v14+ recommended)  
- NPM or Yarn  
- Environment variables for the following:
  - `NEXTAUTH_SECRET`, `GITHUB_ID`, `GITHUB_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`  
  - Cloudinary API credentials and Pusher app details  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Set up environment variables in a `.env` file:  
   ```env
   NEXTAUTH_SECRET=<your_secret_key>
   GITHUB_ID=<your_github_client_id>
   GITHUB_SECRET=<your_github_client_secret>
   GOOGLE_CLIENT_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   PUSHER_APP_ID=<your_pusher_app_id>
   PUSHER_KEY=<your_pusher_key>
   PUSHER_SECRET=<your_pusher_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```  

4. Run the development server:  
   ```bash
   npm run dev
   ```  
   Visit `http://localhost:3000` to see the app in action.  

Feel free to customize this template further for your project!
