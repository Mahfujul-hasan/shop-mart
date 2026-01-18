# ShopMart - Modern E-Commerce Platform


A full-stack e-commerce application built with Next.js, MongoDB, and NextAuth that provides a seamless shopping experience with social authentication, product management, and secure checkout.

# live link: https://shop-mart-zeta.vercel.app/

## 🚀 Features

### User Authentication & Authorization
- **Social Login Integration**: Sign in with Google, Facebook, or other OAuth providers
- **Credential-based Login**: Traditional email/password authentication
- **NextAuth Integration**: Secure session management and authentication flow
- **Protected Routes**: Role-based access control for admin and user features

### Product Management
- **Add Post/Product**: Sellers can list new products with detailed information
- **All Products Page**: Browse complete product catalog with filtering options
- **Product Details Page**: Comprehensive product information with images, descriptions, ratings, and reviews
- **Shop by Category**: Easy navigation through 10+ product categories (Electronics, Fashion, Home & Kitchen, Beauty, Grocery, Sports, Books, Toys, Health, Automobile)
- **Latest Products Section**: Showcase newest additions to the store

### Landing Page Components
- **Dynamic Navigation Bar**: Responsive navbar with category menu and user authentication status
- **Hero Banner**: Eye-catching banner with promotional content
- **How It Works**: Step-by-step guide explaining the shopping process
- **Why Choose Us**: Highlight key benefits and unique selling points
- **Payment & Delivery Info**: Clear information about payment methods and shipping options
- **Customer Reviews**: Display authentic customer testimonials and ratings
- **Fully Functional Footer**: Complete footer with important links, contact info, and social media integration

### Additional Features
- **Responsive Design**: Mobile-first approach ensuring great UX across all devices
- **Server Actions**: Optimized data fetching and mutations using Next.js server actions
- **MongoDB Integration**: Robust database for storing products, users, and orders
- **Search Functionality**: Quick product search and filtering
- **Rating & Review System**: Customer feedback and product ratings

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router), React, Tailwind CSS
- **Backend**: Next.js Server Actions, API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js (OAuth & Credentials)
- **State Management**: React Hooks
- **Image Handling**: Next.js Image Optimization

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Next.js 16+ installed
- MongoDB database  Atlas
- OAuth credentials (Google) for social login

### Step 1: Clone the Repository
```bash
git clone 
cd shopmart
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```


### Step 4: Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Step 5: Build for Production
```bash
npm run build
npm start
```

## 🗺️ Route Summary

### Public Routes
- `/` - Landing page with all sections
- `/products` - All products listing page
- `/products/[id]` - Individual product details page
- `/category/[categoryName]` - Products filtered by category
- `/login` - User login page
- `/register` - User registration page

### Protected Routes (Requires Authentication)
- `/add-product` - Add new product (sellers only)



## 📋 Feature Details

### 1. Authentication System
The app uses NextAuth.js to provide multiple authentication methods:
- **Social OAuth**: One-click login with Google providers
- **Credentials**: Email and password authentication with encrypted storage
- **Protected Routes**: Middleware to restrict access to authenticated users

### 2. Product Catalog
Comprehensive product browsing experience:
- **Grid Layout**: Responsive product cards with images, prices, and ratings
- **Category Filtering**: Quick navigation through product categories
- **Detailed Views**: Rich product pages with multiple images, full descriptions, specifications, and customer reviews

### 3. Landing Page Sections
Engaging homepage design:
- **Hero Banner**: Promotional slider with call-to-action buttons
- **How It Works**: Visual guide showing the shopping process (Browse → Select → Checkout → Delivery)
- **Why Choose Us**: Feature highlights (Fast Delivery, Quality Products, 24/7 Support, Secure Payment)
- **Category Showcase**: Featured categories with images
- **Customer Reviews**: Star ratings and testimonials from verified buyers
- **Latest Products**: Recently added items with special badges

### 4. Add Product Functionality
Sellers can easily list products:
- **Multi-field Form**: Title, description, price, stock, category, brand, images
- **Image Upload**: Support for multiple product images
- **Category Selection**: Dropdown with all available categories
- **Validation**: Client and server-side validation for data integrity
- **Real-time Preview**: See how the product will appear before publishing

### 5. Footer Integration
Fully functional footer with:
- **Quick Links**: latest product, how it works, customer reviews, delivery and payment info, category
- **Category Links**: Direct navigation to product categories
- **Contact Information**: Email, phone,linkedin, github, address

### 6. MongoDB Integration
Efficient data management:
- **Collections**: Products
- **Indexing**: Optimized queries for fast data retrieval
- **Relationships**: Proper linking between users, products, and reviews
- **Server Actions**: Direct database operations without API routes

### 7. Responsive Design
Mobile-optimized experience:
- **Breakpoints**: Tailwind CSS responsive utilities for all screen sizes
- **Touch-friendly**: Large buttons and easy navigation on mobile devices
- **Performance**: Optimized images and lazy loading for fast page loads




## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Mahfujul Hasan - [GitHub Profile](https://github.com/Mahfujul-hasan/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for reliable database solution
- NextAuth.js for authentication
- Tailwind CSS for styling utilities
- Unsplash for product images