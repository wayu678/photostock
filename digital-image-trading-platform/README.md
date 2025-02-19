# Digital Image Trading Platform

## Overview
The Digital Image Trading Platform is a web application that allows users to browse, purchase, and download high-quality images for use in design, graphics, or various online media. The platform ensures that images not yet purchased are protected by displaying them with a blur or watermark, and only allows downloading of images that have been successfully purchased.

## Features
1. **Browsing and Purchasing Images**
   - Users can browse a wide selection of images available for sale.
   - Images that have not been purchased are marked with a lock symbol and a "Buy" button.
   - Users can search and filter images by type or category.

2. **User Management**
   - Supports user registration and login.
   - Each user has a profile page to view account information.
   - Users can view their purchase history and download list.

3. **Shopping Cart**
   - Users can add images to their shopping cart.
   - Multiple images can be ordered at once.
   - The total amount is displayed, and users can proceed to payment.

4. **Payment System**
   - Users can select their preferred payment method (e.g., credit card, bank transfer).
   - The system notifies users of successful payments.

5. **Image Download System**
   - Users can download original files after successful payment.
   - The system maintains a purchase history, allowing users to download purchased images at any time.

## Frontend Technologies
- **Framework**: Vue.js
- **UI Library**: Tailwind CSS
- **Mock Data**: JSON Server / Firebase (to simulate API)
- **Version Control**: Git + GitHub

## Project Structure
```
digital-image-trading-platform
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.vue
│   │   │   └── Register.vue
│   │   ├── Cart
│   │   │   └── Cart.vue
│   │   ├── Image
│   │   │   ├── ImageList.vue
│   │   │   └── ImageItem.vue
│   │   ├── Payment
│   │   │   └── Payment.vue
│   │   ├── Profile
│   │   │   └── Profile.vue
│   │   └── Home.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   ├── ImageList.vue
│   │   ├── Cart.vue
│   │   ├── Payment.vue
│   │   ├── Profile.vue
│   │   └── Download.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── tailwind.config.js
├── README.md
└── vue.config.js
```

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/digital-image-trading-platform.git
   ```
2. Navigate to the project directory:
   ```
   cd digital-image-trading-platform
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm run serve
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.